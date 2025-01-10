import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import {Link} from 'react-scroll';

import { useState } from 'react';
import Image from 'next/image';
import Logo from '../assets/MyInitials.png';

export default function Navbar() {
    const [nav, setNav] = useState(false);

    const handleClick = () =>  setNav(!nav);


    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-slate-500 text-gray-300 z-50">
            <div>
                <Image src={Logo} alt='Logo Image' width={80} height={80} style={{width: 'auto', height: 'auto'}} priority/>
            </div>

            {/* main menu */}
            <ul className='hidden md:flex'>
                <li>
                    <Link to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to="projects" smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Hambuger menu */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars/> : <FaTimes/>}
            </div>
            

            {/* Mobile menu */}
            <ul className= {!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-slate-500 flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="projects" smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>
            {/* Social Icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className=' p-4 w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full  text-gray-300' href="https://www.linkedin.com/in/shelyndelmundo/">
                            LinkedIn <FaLinkedin size={30}/>
                        </a>
                    </li>
                    <li className=' p-4 w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a className='flex justify-between items-center w-full  text-gray-300' href="https://github.com/ShelynDM">
                            Github <FaGithub size={30}/>
                        </a>
                    </li>
                    <li className=' p-4 w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#ff4646]'>
                        <Link to="contact" smooth={true} duration={500} className='flex justify-between items-center w-full  text-gray-300' href="/">
                            Email <HiOutlineMail size={30}/>
                        </Link>
                    </li>
                    {/* <li className=' p-4 w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#46b5ff]'>
                        <a className='flex justify-between items-center w-full  text-gray-300' href="/">
                            Resume <BsFillPersonLinesFill size={30}/>
                        </a>
                    </li> */}
                </ul>

            </div>
        </div>
    );
}