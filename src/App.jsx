// App.jsx
import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import MyWork from './components/MyWork'
import Home from './components/Home'
import Services from './components/Services'
import Contact from './components/Contact'
import About from './components/About'
import Footer from './components/Footer'


const App = () => {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const body = document.body
    if (darkMode) {
      body.classList.add('dark')
    } else {
      body.classList.remove('dark')
    }
  }, [darkMode])
  return (
    <div className='overflow-x-hidden leading-9 ovo-regular outfit'>
      <div className='px-7'>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
     
        <Home />
        <About darkMode={darkMode} setDarkMode={setDarkMode} />
        <Services  darkMode={darkMode} setDarkMode={setDarkMode} />
        <MyWork darkMode={darkMode} setDarkMode={setDarkMode}
         />
        <Contact  darkMode={darkMode} setDarkMode={setDarkMode} />
        <Footer></Footer>
        
      </div>
    </div>
  )
}

export default App

