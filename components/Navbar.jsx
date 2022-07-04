import React, { useState } from 'react';
import { FaBars, FaTimes, FaTwitterSquare } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import Link from 'next/link';

const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  const handleNav = () => setMobile(!mobile);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-white">
      <div>
        <img
          src="white_logo_transparent.png"
          alt="Msport logo"
          className="w-64"
        />
      </div>
      <div>
        <ul className="hidden md:flex">
          <li>
            <Link href="#home">Home</Link>
          </li>
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#partners">Partners</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
          <li><Link href="./news">News</Link></li>
        </ul>
      </div>
      {/* Hamburger */}
      <div className="md:hidden z-10 cursor-pointer" onClick={handleNav}>
        {!mobile ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile menu */}
      <ul
        className={
          !mobile
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleNav} href="#home">
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleNav} href="#about">
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleNav} href="#partners">
            Partners
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleNav} href="#contact">
            Contact
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link href="./news">News</Link>
        </li>
      </ul>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0 ">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-400 bg-red-200">
            <a
              href="/"
              className="flex justify-between items-center w-full text-black"
            >
              InstaGram
              <AiOutlineInstagram size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-400 bg-blue-200">
            <a
              href="/"
              className="flex justify-between items-center w-full text-black"
            >
              Facebook
              <BsFacebook size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-400 bg-yellow-200">
            <a
              href="/"
              className="flex justify-between items-center w-full text-black"
            >
              Twitter
              <FaTwitterSquare size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
