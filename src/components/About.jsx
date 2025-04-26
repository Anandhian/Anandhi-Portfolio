import React from 'react'
import user from '../assets/images/user-image.png'
import dev from '../assets/images/dev-icon.png'
import circular from '../assets/images/circular-text.png'
import img from '../assets/images/img.js'
import { tool } from '../assets/images/img.js'

const About = ({ darkMode }) => {
  return (
    <div id='about' className='w-full z-30 px-[12%] py-20 scroll-mt-20'>
      <h4 className={`text-center mb-2 text-lg ${darkMode ? 'text-white' : 'text-black'}`}>Introduction</h4>
      <h2 className={`text-center text-5xl ${darkMode ? 'text-white' : 'text-black'}`}>About Me</h2>

      <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        <div className='max-w-max mx-auto relative'>
          <img
            src={user}
            alt="user"
            className={`w-64 z-10 sm:w-80 rounded-full max-w-none `}
          />

          <div className='bg-white w-1/2 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_4px_55px_rgba(149,0,162,0.15)] flex items-center justify-center'>
            <img
              src={circular}
              alt="circular"
              className={`w-full spin-slow `}
            />
            <img
              src={dev}
              alt="dev-icon"
              className={`w-1/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 `}
            />
          </div>
        </div>

        <div className='flex-1'>
          <p className={`${darkMode ? 'text-white' : 'text-black'}`}>
            I am an experienced Frontend Developer with over a decade of professional expertise in the field.
            Throughout my career, I have had the privilege of collaborating with prestigious organizations,
            contributing to their success and growth.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 flex-wrap mt-5 max-w-5xl">
            {tool.map((item, index) => (
              <li
                key={index}
                className={`
        border w-full h-full border-gray-300 rounded-xl p-6 cursor-pointer
        transition-all duration-500 hover:-translate-y-2 hover:shadow-lg
        hover:bg-[#fcf4ff] text-center
        ${darkMode ? 'text-white hover:text-black' : 'text-black'}
      `}
              >
                <img
                  className={`w-8 h-8 mx-auto mb-4 ${darkMode ? 'invert' : ''}`}
                  src={item.img}
                  alt="icon"
                />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className={`text-sm `}>
                  {item.topic}
                </p>
              </li>
            ))}
          </ul>


          <h4 className={`my-6 ${darkMode ? 'text-white' : 'text-gray-700'}`}>Tools I use</h4>
          <ul className="flex items-center gap-3">
            {img.map((item, index) => (
              <li
                key={index}
                className={`flex items-center justify-center w-12 sm:w-14 aspect-square 
                  border border-gray-400 rounded-lg cursor-pointer 
                  transition duration-500 hover:-translate-y-1
                  ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}
              >
                <img
                  className={`w-5 sm:w-7 ${darkMode ? 'invert' : ''}`}
                  src={item}
                  alt={`tool-${index}`}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About



