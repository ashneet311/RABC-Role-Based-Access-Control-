import React from 'react';
import { FiSearch } from 'react-icons/fi';

const Navbar = () => {
  return (
    <div className="bg-[#F2F2F2] overflow-hidden p-5 ">
      {/* Logo and Title */}
      <div className="flex items-center space-x-4 relative left-28 ">
        <img
          src="logo.png" // Replace with your logo path
          alt="Logo"
          className="h-12 relative "
        />
        <span className="border-l border-gray-300 h-12 relative left-28"></span>
        <h2 className="text-2xl text-[#01204E] relative left-28 ">Admin Dashboard</h2>
        
      </div>
      
      {/* Search Bar */}
      {/* Icons and User Info */}
      
    </div>
  );
};

export default Navbar;
