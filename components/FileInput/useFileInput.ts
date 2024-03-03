import React,{ useState, useCallback } from 'react';

export interface FileInputProps {
  multiple?: boolean;
  accept?: string;
  onFilesChange?: (files: FileList | null) => void;
}

export function useFileInput({ multiple = false, accept = '*', onFilesChange}: FileInputProps) {
  const [files, setFiles] = useState<FileList | null>(null);
  const handleFilesChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    setFiles(selectedFiles);
    if (onFilesChange) {
      onFilesChange(selectedFiles);
    }
  }, [onFilesChange]);

  const inputProps = {
    onChange: handleFilesChange,
    multiple,
    accept,
    type: 'file',
  };

  return {
    inputProps, 
    files,
  };
}
