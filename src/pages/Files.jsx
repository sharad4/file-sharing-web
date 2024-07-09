import React, { useContext } from 'react'
import FileList from '../components/FileList';
import { FileContext } from '../context/FileContext';

const Files = () => {
  const { files } = useContext(FileContext);

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold mb-4">Available Files</h2>
      <FileList files={files} />
    </div>
  )
}

export default Files