import React from 'react'
import elina from '../assets/images/profile-img.png'
import hand from '../assets/images/hand-icon.png'
import AnimatedName from './AnimatedName'
import right from '../assets/images/right-arrow-white.png'
import download from '../assets/images/download-icon.png'

const Home = () => {
  return (
    <div
      id="home"
      className="w-11/12 mx-auto py-11 my-auto text-center max-w-3xl h-screen flex flex-col items-center justify-center"
    >
      <img className="w-36 mt-40" src={elina} alt="Profile" />

      <div className="flex gap-3 justify-center items-end text-xl md:text-2xl mb-2">
        <AnimatedName />
        <img className="w-5" src={hand} alt="Hand icon" />
      </div>

      <h1 className="text-3xl mb-3 sm:text-6xl lg:text-[66px]">
        frontend web developer based in London.
      </h1>
      <p className="max-w-2xl mb-3 mx-auto">
        I am a frontend developer from California, USA with 10 years of experience in multiple companies like Microsoft, Tesla and Apple.
      </p>

      <div className="flex flex-col lg:flex-row md:flex-row gap-2 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2"
        >
          contact
          <img src={right} alt="Right arrow" />
        </a>

        <a
          href="/anandhi.pdf"
          download
          className="px-10 py-3 border rounded-full flex items-center border-gray-500 gap-2"
        >
          My resume
          <img className="w-6" src={download} alt="Download icon" />
        </a>
      </div>
    </div>
  )
}

export default Home

