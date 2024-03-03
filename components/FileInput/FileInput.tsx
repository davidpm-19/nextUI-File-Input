import React, { useRef, useState, useCallback } from 'react';
import { useFileInput } from './useFileInput';

const FileInput = ({ multiple = false, accept = '*' }) => {
  const { inputProps } = useFileInput({ multiple, accept });
  const inputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<FileList | null>(null);
  const [isHovering, setIsHovering] = useState(false); // New state for hover

  const displayText = files && files.length > 0 ? isHovering ? `${files[0].name}` : `${files[0].name}${files.length > 1 ? ` +${files.length - 1} files` : ''}` : null;

  const handleFilesChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    setFiles(selectedFiles);
    console.log('Selected Files:', selectedFiles);
  }, []);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <div className="flex items-center border-solid w-full border-medium border-default-200 hover:border-default-400 rounded-medium bg-[#1c1c1c]"onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}>
      <button
        type="button"
        className={`text-white text-start py-2 px-3 h-14 text-small font-normal p-2 ${files && files.length > 0 ? 'w-1/4 border-r-medium rounded-l-medium border-r-default-200' : 'w-full rounded-medium'}`}
        onClick={() => {
          console.log("hello");
          console.log(inputRef.current);
          inputRef.current && inputRef.current.click();
        }}
        
      >
        {files && files.length > 0 ? 'Change' : multiple ? 'Select Files' : 'Select File'}
      </button>
      {files && files.length > 0 && (
        <div className="p-2 overflow-hidden whitespace-nowrap text-ellipsis" >
          {displayText}
          {isHovering && files.length > 1 && (
            <div className="absolute items-center border-solid border-medium border-default-400 rounded-medium mt-5 p-2 bg-[#1c1c1c]/10 backdrop-blur-md max-h-[7rem] overflow-y-auto">
              {Array.from(files).map((file, index) => (
                index > 0 && <div key={index}>{file.name}</div>
              ))}
            </div>
          )}
        </div>
      )}
      <input {...inputProps} ref={inputRef} onChange={handleFilesChange} style={{ display: 'none' }} />
    </div>
  );
};

export default FileInput;
