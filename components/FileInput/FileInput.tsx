import React, { useRef, useState, useCallback } from 'react';
import { useFileInput } from './useFileInput';
import { DeleteIcon } from '../Icon/delete-icon';
import { Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure } from "@nextui-org/react";
import { bold, regular} from '#/components/fonts/fonts';
import clsx from 'clsx';

const FileInput = ({ multiple = false, accept = '*' }) => {
  const { inputProps } = useFileInput({ multiple, accept });
  const inputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<Array<File>>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const displayText = files.length > 0 ? `${files[0].name}${files.length > 1 ? ` +${files.length - 1} more` : ''}` : 'No files selected';

  const handleOpen = () => {
    onOpen();
  }

  const handleFilesChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    if (selectedFiles) {
      setFiles(Array.from(selectedFiles));
    }
  }, []);

  const deleteFile = useCallback((indexToRemove: number) => {
    setFiles((currentFiles) => currentFiles.filter((_, index) => index !== indexToRemove));
  }, []);

  return (
    <div className="flex flex-col justify-center items-center border-solid w-full max-w-sm md:max-w-[95%] border-medium border-default-200 hover:border-default-400 rounded-medium bg-interactive_bg mr-4 ml-4">
      <div className="flex items-center w-full">
        <Button
          type="button"
          className={clsx(`text-foreground bg-interactive_bg py-2 px-3 h-14 text-small font-normal p-2 ${files.length > 0 ? 'w-1/4 text-start border-r-medium rounded-l-medium rounded-r-none border-r-default-200' : 'w-full rounded-medium text-center'}`,
                    regular.className)}
          onClick={() => {
            inputRef.current && inputRef.current.click();
          }}
        >
          {files.length > 0 ? 'Change' : multiple ? 'Select Files' : 'Select File'}
        </Button>
        {files.length > 0 && (
          <div className="flex-grow p-2 overflow-hidden whitespace-nowrap text-ellipsis">
            {displayText}
          </div>
        )}
        {files.length > 1 && (
          <Button
            type="button"
            className="text-foreground font-bold py-2 px-4 rounded bg-transparent"
            onPress={() => handleOpen()}
          >
            Show Files
          </Button>
        )}
        {files.length === 1 && (
          <div 
            className='cursor-pointer px-4'
            onClick={() => deleteFile(0)} // Assuming you want to delete the first (and only) file
          >
            <DeleteIcon/>
          </div>
        )}
      </div>
      <Modal backdrop='blur' isOpen={isOpen} onClose={onClose} placement='top'>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Selected Files</ModalHeader>
              <ModalBody>
                <table className="w-full mt-2 mb-2">
                  <tbody>
                    {files.map((file, index) => (
                      <tr key={index} className="border-b border-default-200">
                        <td className="p-2 text-foreground overflow-hidden whitespace-nowrap text-ellipsis">{file.name}</td>
                        <td className="p-2 flex justify-end">
                          <div 
                          className='bg-transparent cursor-pointer'
                          onClick={() => deleteFile(index)} >
                            <DeleteIcon/>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
      <input {...inputProps} ref={inputRef} onChange={handleFilesChange} style={{ display: 'none' }} />
    </div>
  );
};

export default FileInput;
