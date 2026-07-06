import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
   <footer className="w-full bg-gradient-to-r from-[#1a6859] via-[#7db168] to-[#1a6859] text-white px-6 mt-auto">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center md:text-left">
        
        <div className="space-y-1 text-[10px]">
          <p className="font-bold">Contact Us</p>
          <p>Phone: +63 9xx xxx xxxx</p>
          <p>Email: contact@e-gala.com</p>
        </div>
	
        <div className="flex justify-center gap-6 space-y-1 text-sm">
		  
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
            <FaFacebook />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
            <FaTwitter />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
            <FaYoutube />
          </a>
        </div>
        <div className="text-xs opacity-90">
          <p>&copy; 2026 e-Gala App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;