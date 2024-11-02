"use client";
import React, { useState, useEffect, useRef } from 'react';
import { FaCog, FaBell, FaUserCircle, FaBars } from 'react-icons/fa'; // Import icons

interface HeaderProps {
  setSearchQuery: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ setSearchQuery }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null); // Ref to track the dropdown menu

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    // Add event listener to detect clicks outside
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Clean up event listener when component unmounts
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <header className="p-4 bg-white shadow">
      <div className="flex justify-between items-center">
        {/* Left Side: Search Bar */}
        <input
          type="text"
          placeholder="Search mail"
          className="border p-2 rounded w-1/3"
          onChange={(e) => setSearchQuery(e.target.value)} // Update search query
        />

        {/* Right Side: Icons + Dropdown */}
        <div className="relative flex space-x-4 items-center">
          {/* Icons */}
          <FaBell className="text-gray-600 cursor-pointer" size={20} title="Notifications" />
          <FaCog className="text-gray-600 cursor-pointer" size={20} title="Settings" />
          <FaUserCircle className="text-gray-600 cursor-pointer" size={24} title="Profile" />

          {/* Dropdown Menu Trigger */}
          <button
            className="p-2 rounded-full hover:bg-gray-100 transition"
            onClick={toggleDropdown} 
          >
            <FaBars className="h-5 w-5 text-gray-500" />
          </button>

          {/* Dropdown Menu */}
          {showDropdown && (
            <div ref={dropdownRef} className="absolute right-0 mt-10 w-48 bg-white border rounded shadow-lg z-10">
              <div className="p-2">
                <button className="flex items-center space-x-2 w-full hover:bg-gray-100 p-2" title="Google Drive">
                  <img src="" alt="Drive" className="h-5 w-5" />
                  <span>Drive</span>
                </button>
                <button className="flex items-center space-x-2 w-full hover:bg-gray-100 p-2" title="Google Calendar">
                  <img src="" alt="Calendar" className="h-5 w-5" />
                  <span>Calendar</span>
                </button>
                <button className="flex items-center space-x-2 w-full hover:bg-gray-100 p-2" title="Docs">
                  <img src="" alt="Docs" className="h-5 w-5" />
                  <span>Docs</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;