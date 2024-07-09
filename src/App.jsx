import React from "react";
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Home from './pages/Home';
import Upload from './pages/Upload';
import Files from './pages/Files';
import Header from './components/Header';
import Footer from './components/Footer';
import { FileProvider } from "./context/FileContext";

function App() {

  return (
    <FileProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/upload" element={<Upload />} />
              <Route path="/files" element={<Files />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </FileProvider>
  
      
  )
}

export default App
