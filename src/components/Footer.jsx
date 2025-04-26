import React from 'react'
import logo from '../assets/images/logo.png'
import mail from '../assets/images/mail_icon.png'

const Footer = () => {
    return (
        <div id='footer' className='mt-20'>
            <div className="text-center">
                <h1>Anandhi</h1>
                <div className='w-max flex items-center
             gap-2 mx-auto'>
                    <img src={mail} alt="altimage" className='w-6' />
                    anandhianandhan209@gmail.com


                </div>


            </div>

            <div className='text-center sm:flex items-center justify-between py-4 border-t border-gray-400 mx-[10%] my-10'>
                <p>@2025 Anandhi. All rights reserved</p>

                <ul className='flex items-center gap-4 justify-center mt-4 sm:mt-0'>

                    <li className="cursor-pointer hover:text-blue hover:underline">
                        <a href="https://github.com/Anandhian" target="_blank" rel="noopener noreferrer">Github</a>
                    </li>
                    <li className="cursor-pointer hover:text-blue hover:underline">
                        <a href="https://www.linkedin.com/in/anandhi-frontend-devloper/" target="_blank" rel="noopener noreferrer">Linkedin</a>
                    </li>
                    <li className="cursor-pointer hover:text-blue hover:underline">
                        <a href="https://www.naukri.com/mnjuser/homepage" target="_blank" rel="noopener noreferrer">Naukri</a>
                    </li>
                    <li className="cursor-pointer hover:text-blue hover:underline">
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </li>

                </ul>

            </div>









        </div>
    )
}

export default Footer