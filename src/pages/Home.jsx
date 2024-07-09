import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="container mx-auto text-center py-10">
      <h2 className="text-4xl font-bold mb-4">Welcome to FileShare</h2>
      <p className="text-lg mb-6">Upload and share your files easily and securely.</p>
      <Link
        to="/upload"
        className='bg-primary text-white px-6 py-3 rounded hover:bg-secondary transition'
      >
        Get Started
      </Link>
    </div>
  )
}

export default Home