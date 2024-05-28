// Footer.js
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-lg font-bold">Stay Connected</h2>
            <p className="mt-2">Follow us on social media for updates and promotions.</p>
          </div>
          <div className="flex items-center justify-center md:justify-end space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition duration-300 transform hover:scale-110">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition duration-300 transform hover:scale-110">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700 transition duration-300 transform hover:scale-110">
              <FaInstagram size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 transition duration-300 transform hover:scale-110">
              <FaLinkedin size={24} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 transition duration-300 transform hover:scale-110">
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
        <hr className="my-4 border-gray-600" />
        <div className="text-center">
          <p>&copy; 2024 Food Ordering App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
