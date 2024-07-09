import React, { useContext, useState } from 'react'
import FileUpload from '../components/FileUpload'
import { FileContext } from '../context/FileContext';
import FileList from '../components/FileList';


const Upload = () => {
  const { files, addFiles } = useContext(FileContext);

  const handleFileUpload = (newFiles) => {
    addFiles(Array.from(newFiles));
  };

  return (
    <div className='container mx-auto py-10'>
      <h2 className="text-3xl font-bold mb-4">Upload Files</h2>
      <FileUpload onUpload={handleFileUpload} />
      <h3 className="text-2xl font-bold mt-6">Uploaded Files</h3>
      <FileList files={files} />
    </div>
  )
}

export default Upload