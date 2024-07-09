import React, { createContext, useState } from 'react';

export const FileContext = createContext();

export const FileProvider = ({ children }) => {
    const [files, setFiles] = useState([]);

    const addFiles = (newFiles) => {
        setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    };

  return (
    <FileContext.Provider value={{ files, addFiles }}>
        {children}
    </FileContext.Provider>
  );
};
