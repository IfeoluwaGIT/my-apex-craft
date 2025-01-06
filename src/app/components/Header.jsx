'use client'

import React, { useState } from 'react';

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearchBar = () => {
    setShowSearch((prev) => !prev);
  };

  return (
    <header>
      {/* Top Bar */}
      <div className="flex justify-between items-center bg-green-100 text-green-800 px-4 py-2">
        <div className="flex gap-3">
          <span>🌐</span>
          <span>📘</span>
          <span>🐦</span>
        </div>
        <div className="flex items-center gap-4">
          <span>📞 +123 456 789</span>
          <button
            onClick={toggleSearchBar}
            className="cursor-pointer text-green-800"
          >
            🔍
          </button>
        </div>
      </div>

      {showSearch && (
        <div className="bg-white px-4 py-2">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
      )}

      {/* Navigation Bar */}
      <nav className="flex justify-between items-center bg-green-600 text-white px-6 py-4">
        <div className="text-xl font-bold">MyCompany</div>
        <ul className="flex gap-6">
          <li className="cursor-pointer hover:underline">Course</li>
          <li className="cursor-pointer hover:underline">Accreditation</li>
          <li className="cursor-pointer hover:underline">About</li>
          <li className="cursor-pointer hover:underline">Locations</li>
          <li className="cursor-pointer hover:underline">Blog</li>
          <li className="cursor-pointer hover:underline">Contact</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="bg-[url('/hero-apex.jpg')] bg-cover bg-center text-white text-center py-48 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Platform</h1>
          <p className="mb-6">Empowering education with modern technology.</p>
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search for courses..."
              className="w-full p-3 border border-gray-300 rounded text-black"
            />
          </div>
          <div className="flex justify-center gap-4">
            <button className="bg-green-700 px-6 py-3 rounded text-white hover:bg-green-800">
              Get Started
            </button>
            <button className="bg-white px-6 py-3 rounded text-green-700 hover:bg-gray-100 border border-green-700">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="flex justify-between items-center bg-green-100 text-green-800 px-6 py-4">
        <span className="text-lg">Ready to explore our platform?</span>
        <button className="bg-green-600 px-6 py-2 text-white rounded hover:bg-green-700">
          Join Now
        </button>
      </div>
    </header>
  );
};

export default Header;
