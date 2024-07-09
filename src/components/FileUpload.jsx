import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const FileUpload = ({ onUpload }) => {
  const [files, setFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (e) => {
    setFiles([...e.target.files]);
  };

  const handleUpload = async () => {
    if (files.length === 0) {
      toast.error('Please select files to upload');
      return;
    }

    try {
      for (let i = 0; i <= 100; i++) {
        setTimeout(() => setUploadProgress(i), i * 50);
      }

      setTimeout(() => {
        toast.success('Files upload successfully');
        onUpload(files);
        setFiles([]);
        setUploadProgress(0);
      }, 5000);

    } catch (error) {
      toast.error('Failed to upload files');
    }
  };

  return (
    <div className='border p-4 rounded'>
      <input type='file' multiple onChange={handleFileChange} />
      <button className='bg-blue-500 text-white px-4 py-2 mt-2 rounded'
        onClick={handleUpload}
      >
        Upload
      </button>
      <div className="mt-4 w-24 h-24 mx-auto">
        <CircularProgressbar 
          value={uploadProgress}
          text={`${uploadProgress}%`}
          styles={buildStyles({
            textColor: '#000',
            pathColor: '#4ade80',
            trailColor: '#d1d5db',
          })}

        />
      </div>
      <ToastContainer />
    </div>
  );
};

export default FileUpload