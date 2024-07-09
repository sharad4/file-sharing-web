import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import shareFile from '../assets/shareFile.jpg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='bg-gray-800 text-white p-4'>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={shareFile} alt="logo" className="w-12 h-12 mr-3 rounded" />
          <h1 className="text-2xl font-bold">
            <Link to="/">FileShare</Link>
          </h1>
        </div>
        
        <nav>
          <button className='md:hidden' onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
          <ul
            className={`md:flex md:items-center md:space-x-6 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <li>
              <Link className='block md:inline px-3 py-2' to="/" onClick={toggleMenu}>Home</Link>
            </li>
            <li>
              <Link className='block md:inline px-3 py-2' to="/upload" onClick={toggleMenu}>Upload</Link>
            </li>
            <li>
              <Link className='block md:inline px-3 py-2' to="files" onClick={toggleMenu}>Files</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
};

export default Header;