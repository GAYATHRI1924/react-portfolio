import React from 'react'
import logo from '../assets/image.png'
import { TbLetterG, TbLetterM } from "react-icons/tb";
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
const Navbar = () => {
  return <nav className="mb-20 flex items-center justify-between py-6 "> 
    <div className='flex flex-shrink-0 items-center'>
    <TbLetterG  size={'2rem'} className='mx-2'/>
    </div>
       <div  className='m-8 flex items-center justify-center gap-4 text-2xl'>
           <a href="https://www.linkedin.com/in/gayathri-m-393574200/" target='_blank'><FaLinkedin /></a> 
           <a href="https://github.com/GAYATHRI1924"  target='_blank'><FaGithub /></a> 
            <FaTwitterSquare />
            <FaInstagram  />
       </div>
     
  </nav>
};

export default Navbar