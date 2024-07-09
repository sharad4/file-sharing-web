import React from 'react'
import { FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from 'react-share'

const FileList = ({ files }) => {
  

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
            <div className="flex mt-4 space-x-2">
              <FacebookShareButton
                url={URL.createObjectURL(file)}
                quote={`Check out this file: ${file.name}`}
                hashtag='#FileShare'
              >
                <FacebookIcon size={32} round />
              </FacebookShareButton>
              <TwitterShareButton
                url={URL.createObjectURL(file)}
                title={`Check out this file: ${file.name}`}
                hashtags={['FileShare']}
              >
                <TwitterIcon size={32} round/>
              </TwitterShareButton>
              <LinkedinShareButton
                url={URL.createObjectURL(file)}
                title={`Check out this file: ${file.name}`}
                summary='I found this file interesting and wanted to share it with you.'
                source='FileShare'
              >
                <LinkedinIcon size={32} round/>
              </LinkedinShareButton>
              <WhatsappShareButton
                url={URL.createObjectURL(file)}
                title={`Check out this file: ${file.name}`}
              >
                <WhatsappIcon size={32} round />
              </WhatsappShareButton>
            </div>
        </div>
      ))}
    </div>
  )
}

export default FileList