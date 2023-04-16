import React, { useState } from 'react';

function Header() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <header className="bg-gray-800 text-white">
      <div className="flex items-center justify-between px-4 py-3 md:px-6">
        <div className="flex items-center">
          <button
            type="button"
            className="text-gray-400 hover:text-white md:hidden"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              {showSidebar ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5 9H19V7H5V9ZM5 15H19V13H5V15ZM5 11H19V9H5V11Z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H20V18H4V16Z"
                />
              )}
            </svg>
          </button>
          <a href="/" className="ml-4 font-bold text-xl">
            Schotest
          </a>
        </div>
        <nav className="hidden md:flex">
        <a href="/" className="block text-white font-bold py-2 mx-5">
            HOME
          </a>
          <a href="/" className="block text-gray-400 hover:text-white py-2 mx-5">
            ABOUT US
          </a>
          <a href="/" className="block text-gray-400 hover:text-white py-2 mx-5">
            FEATURES
          </a>
          <a href="/" className="block text-gray-400 hover:text-white py-2 mx-5">
            BASIC PARAMETERS
          </a>
          <a href="/" className="block text-gray-400 hover:text-white py-2 mx-5">
            BLOGS
          </a>
          <a href="/" className="block text-gray-400 hover:text-white py-2 mx-5">
            NOTIFICATIONS
          </a>
          <a href="/" className="block text-gray-400 hover:text-white py-2 mx-5">
            EVENTS
          </a>
          <a href="/" className="block text-gray-400 hover:text-white py-2 mx-5">
            GALLERY
          </a>
          <a href="/" className="block text-gray-400 hover:text-white py-2 mx-5">
            CONTACT US
          </a>
          <a href="/" className="block text-gray-400 hover:text-white py-2 mx-5">
            LOGIN
          </a>
          <a href="/" className="block text-gray-400 hover:text-white py-2 mx-5">
            SIGN UP
          </a>
        </nav>
      </div>
      {showSidebar && (
        <div className="md:hidden bg-gray-700 py-3 px-4">
          <a href="/" className="block text-white font-bold py-2">
            HOME
          </a>
          <a href="/" className="block text-gray-400 hover:text-white py-2">
            ABOUT US
          </a>
          <a href="/" className="block text-gray-400 hover:text-white py-2">
            FEATURES
          </a>
          <a href="/" className="block text-gray-400 hover:text-white py-2">
            BASIC PARAMETERS
          </a>
          <a href="/" className="block text-gray-400 hover:text-white py-2">
            BLOGS
          </a>
          <a href="/" className="block text-gray-400 hover:text-white py-2">
            NOTIFICATIONS
          </a>
          <a href="/" className="block text-gray-400 hover:text-white py-2">
            EVENTS
          </a>
          <a href="/" className="block text-gray-400 hover:text-white py-2">
            GALLERY
          </a>
          <a href="/" className="block text-gray-400 hover:text-white py-2">
            CONTACT US
          </a>
          <a href="/" className="block text-gray-400 hover:text-white py-2">
            LOGIN
          </a>
          <a href="/" className="block text-gray-400 hover:text-white py-2">
            SIGN UP
          </a>
        </div>
      )}
    </header>
  );
}

export default Header;
