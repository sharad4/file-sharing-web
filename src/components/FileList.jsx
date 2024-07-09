import React from 'react'

const FileList = ({ files }) => {
  // const files = [
  //   { name: 'file1.txt', url: '/files/file1.txt' },
  //   { name: 'file2.jpg', url: '/files/file2.jpg' },
  // ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
       {files.map((file, index) => (
        <div key={index} className='border p-4 rounded shadow hover:shadow-lg transition'>
          <h3 className='text-xl font-bold mb-2'>{file.name}</h3>
          <a 
            className='text-primary hover:underline' 
            href={URL.createObjectURL(file)}
            download
            >
              Download
            </a>
        </div>
      ))}
    </div>
  )
}

export default FileList