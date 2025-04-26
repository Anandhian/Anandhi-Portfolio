import React from 'react'
import arrow_dark from '../assets/images/right-arrow.png'
import { tool2 } from '../assets/images/img.js'

const Services = ({ darkMode }) => {
  return (
    <div id='services' className='w-full px-[12%] scroll-mt-20 py-20'>
      <h4 className={`text-center mb-2 text-lg ${darkMode ? 'text-amber-300' : 'text-black'}`}>What I Offer</h4>
      <h2 className={`text-center text-5xl ${darkMode ? 'text-white' : 'text-black'}`}>My Services</h2>
      <p className={`text-center max-w-2xl mx-auto mt-5 mb-12 ${darkMode ? 'text-white' : 'text-gray-600'}`}>
        I am a frontend developer from California, USA with 10 years of experience in multiple companies like Microsoft, Tesla and Apple.
      </p>

      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {tool2.map((item, index) => (
          <div
            key={index}
            className={`border rounded-lg px-8 py-12 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl
              ${darkMode 
                ? 'border-gray-600 bg-black text-white hover:bg-gray-800' 
                : 'border-gray-300 bg-white text-black hover:bg-pink-100 hover:text-white'}`}
          >
            <img src={item.img} alt="" className={`w-10 mb-4 ${darkMode ? 'invert' : ''}`} />
            <h3 className={`text-lg my-4 ${darkMode ? 'text-white' : 'text-gray-700'}`}>{item.title}</h3>
            <p className={`text-sm leading-5 ${darkMode ? 'text-white' : 'text-gray-600'}`}>
              {item.headline}
            </p>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 text-sm mt-5 font-medium ${darkMode ? 'text-blue-300' : 'text-blue-700'} hover:underline`}
            >
              Read More
              <img src={arrow_dark} alt="arrow" className={darkMode ? 'invert' : ''} />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services

