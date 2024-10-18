import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-4 overflow-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left section with logo or company name */}
        <div className="text-lg font-semibold ml-2 mb-4 md:mb-0">
          CoinChains
        </div>

        {/* Center section with navigation links */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="#about" className="hover:text-gray-200">About Us</a>
          <a href="#services" className="hover:text-gray-200">Services</a>
          <a href="#contact" className="hover:text-gray-200">Contact</a>
          <a href="#privacy" className="hover:text-gray-200">Privacy Policy</a>
        </div>

        {/* Right section with social media icons */}
        <div className="flex space-x-4">
          <a href="#facebook" className="hover:text-gray-200">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#twitter" className="hover:text-gray-200">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#instagram" className="hover:text-gray-200">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      {/* Bottom section with copyright */}
      <div className="mt-4 ml-16 text-center text-sm text-gray-100">
        &copy; 2024 Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
