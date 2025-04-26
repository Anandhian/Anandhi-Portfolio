import React from 'react';
import { tool3 } from '../assets/images/img.js';

const MyWork = ({ darkMode }) => {
  return (
    <div id='mywork' className='w-full px-[12%] mt-28 scroll-mt-20 py-20'>
      <h4 className={`text-center mb-2 text-lg ${darkMode ? 'text-amber-300' : 'text-black'}`}>My portfolio</h4>
      <h2 className={`text-center text-5xl ${darkMode ? 'text-white' : 'text-black'}`}>My latest work</h2>
      <p className={`text-center max-w-2xl mx-auto mt-5 mb-12 ${darkMode ? 'text-white' : 'text-gray-600'}`}>
        Welcome to my web development portfolio! Explore a collection of projects showcasing my 
        expertise in front-end development.
      </p>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7'>
        {tool3.map((item, index) => (
          <div
            key={index}
            className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group overflow-hidden'
            style={{ backgroundImage: `url(${item.img})` }}
          >
            <div className={`w-11/12 rounded-md absolute bottom-4 left-1/2 transform -translate-x-1/2 py-2 px-4 flex items-center justify-between transition-all duration-300 group-hover:bottom-6
              ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
              
              <div>
                <h2 className='font-semibold text-sm'>{item.title}</h2>
                <p className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{item.heading}</p>
              </div>
              <a  href={item.link}
              target="_blank"
              rel="noopener noreferrer">
                <div className={`border rounded-full w-9 h-9 flex items-center justify-center shadow-md transition
                ${darkMode ? 'border-white group-hover:bg-lime-500' : 'border-black group-hover:bg-lime-300'}`}>
                <img src={item.img1} alt='send icon' className={`w-4 h-4 ${darkMode ? 'invert' : ''}`} />
              </div>
              </a>

              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWork;