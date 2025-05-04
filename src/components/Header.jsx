import React, { useState } from 'react';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header
      className={`flex items-center justify-between px-6 py-4 ${
        darkMode ? "bg-[#001219]" : "bg-[#94d2bd]"
      }`}>
      <div className="flex items-center space-x-3">
        <img
          src="https://img.icons8.com/?size=100&id=llnqvTERRls7&format=png&color=000000" // Replace with your logo path
          alt="ShoppyGlobe Logo"
          className="h-8 w-8"
        />
        <h1 className="text-2xl font-bold text-[#ee9b00]">ShoppyGlobe</h1>
      </div>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded-md text-white bg-[#005f73] hover:bg-[#0a9396] transition">
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
};

export default Header;