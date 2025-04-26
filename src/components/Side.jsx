
import React from 'react';
import close from '../assets/images/close-black.png';

const Side = ({ isOpen, toggleSidebar }) => {
  return (
    <div>
      <div
        className={`
          fixed top-0 bottom-0 right-0 w-64 h-screen bg-rose-200 z-40
          px-10 py-20 flex flex-col gap-6 transition-transform duration-500 ease-in-out 
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* Close Button */}
        <button onClick={toggleSidebar} className="self-end mb-4 focus:outline-none">
          <img src={close} alt="Close" className="w-6 h-6" />
        </button>

        <li><a href="#home" onClick={toggleSidebar}>Home</a></li>
        <li><a href="#about" onClick={toggleSidebar}>About me</a></li>
        <li><a href="#services" onClick={toggleSidebar}>Services</a></li>
        <li><a href="#work" onClick={toggleSidebar}>My work</a></li>
        <li><a href="#contact" onClick={toggleSidebar}>Contact me</a></li>
      </div>
    </div>
  );
};

export default Side;
