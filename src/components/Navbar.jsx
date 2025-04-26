

// import React from 'react';
// import img from '../assets/images/arrow-icon.png';
// import moon from '../assets/images/moon_icon.png';
// import sun from '../assets/images/sun_icon.png'; // Ensure you have the sun icon
// import Side from './Side';

// const Navbar = ({ darkMode, setDarkMode }) => {
//   return (
//     <>
//       <div
//         className={`
//           w-full fixed z-40 px-8
//           lg:px-16          /* tightened at lg */
//           xl:px-[14%]       /* restore percentage at xl+ */
//            flex justify-between items-center 
//           ${darkMode ? 'bg-[#11001f] text-white' : 'bg-white text-black'} 
//           transition-colors duration-300
//         `}
//       >
//         <h1 className='mr-8 lg:mr-12 font-semibold text-xl'>Anandhi</h1>

//         <ul
//           className={`
//             hidden lg:flex items-center 
//             gap-4 lg:gap-6      /* smaller gap at lg, normal above */
//             rounded-full px-10  /* slightly less padding at lg */
//             py-3
//             ${darkMode ? 'bg-[#6c2bd9] text-white' : 'bg-white text-black'} 
//             shadow-sm bg-opacity-70 dark:bg-opacity-90 
//             transition-colors duration-300
//           `}
//         >
//           <li><a href="#home">Home</a></li>
//           <li><a href="#about">About me</a></li>
//           <li><a href="#services">Services</a></li>
//           <li><a href="#mywork">My Work</a></li>
//           <li><a href="#contact">Contact me</a></li>
//         </ul>

//         <div className='lg:flex items-center gap-4 lg:gap-7 px-8 lg:px-10 py-2.5 ml-4'>
//           <button onClick={() => setDarkMode(!darkMode)} className='focus:outline-none'>
//             {darkMode ? (
//               <img src={sun} alt="Toggle Theme" className='w-6 mx-5 mt-5 md:mx-4 lg:mx-0' />
//             ) : (
//               <img src={moon} alt="Toggle Theme" className='w-6 mx-4 md:mx-4 lg:mx-0' />
//             )}
//           </button>

//           <div
//             className={`
//               hidden lg:flex gap-3 items-center border border-gray-500 p-2 rounded-full
//               ${darkMode ? 'bg-[#6c2bd9] text-white' : 'bg-white text-black'}
//               transition-colors duration-300
//             `}
//           >
//             <li className='list-none'><a href="#contact">Contact me</a></li>
//             <img src={img} alt="" className='w-3' />
//           </div>
//         </div>
//       </div>

//       {/* Side menu */}
//       <Side />
//     </>
//   );
// };

// export default Navbar;
import React from 'react';
import img from '../assets/images/arrow-icon.png';
import moon from '../assets/images/moon_icon.png';
import sun from '../assets/images/sun_icon.png';
import menu from '../assets/images/menu-black.png';
import menuWhite from '../assets/images/menu-white.png'; // Light mode menu icon
import Side from './Side';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleSidebar = () => setIsOpen(open => !open);

  return (
    <>
      <div
        className={`
          w-full fixed z-40  px-5 py-8 lg:px-16 xl:px-[14%]
          flex justify-between items-center  /* ensures vertical centering */
          ${darkMode ? 'bg-[#11001f] text-white' : 'bg-white text-black'} 
          transition-colors duration-300
        `}
      >
        {/* Mobile menu button */}
        <button
          onClick={toggleSidebar}
          className="lg:hidden p-2 focus:outline-none"
        >
          <img
            src={darkMode ? menuWhite : menu} // Swap the menu icon based on darkMode
            alt="Menu"
            className="w-6 h-6"
          />
        </button>
        <a className='cursor-pointer' href="#
        "> <h1 className='font-semibold text-xl cursor-pointer lg:text-2xl'>Anandhi</h1></a>

       

        <ul
          className={`
            hidden lg:flex items-center gap-4 lg:gap-6
            rounded-full px-10 py-3
            ${darkMode ? 'bg-[#6c2bd9] text-white' : 'bg-white text-black'} 
            shadow-sm bg-opacity-70 dark:bg-opacity-90 
            transition-colors duration-300
          `}
        >
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About me</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#mywork">My Work</a></li>
          <li><a href="#contact">Contact me</a></li>
        </ul>

        <div className='flex items-center gap-4 lg:gap-7'>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className='focus:outline-none p-2'
          >
            <img
              src={darkMode ? sun : moon}
              alt="Toggle Theme"
              className='w-6 h-6'
            />
          </button>

          <a
            href="#contact"
            className={`
              hidden lg:flex items-center gap-2 px-4 py-2 rounded-full border
              ${darkMode ? 'bg-[#6c2bd9] text-white border-transparent' : 'bg-white text-black border-gray-500'}
              transition-colors duration-300
            `}
          >
            Contact me <img src={img} alt="" className='w-4 h-4' />
          </a>
        </div>
      </div>

      {/* Side menu */}
      <Side isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </>
  );
};

export default Navbar;



