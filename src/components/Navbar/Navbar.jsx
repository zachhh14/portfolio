import React, { useEffect, useRef, useState } from 'react';
import './Navbar.css';
import { Fade as Hamburger } from 'hamburger-react';

function Navbar() {
  // for hamburger functionality
  const [isOpen, setOpen] = useState(false);

  return (
    <div className='fixed z-10 w-full px-6 text-white bg-black md:px-20 opacity-80 parent-navbar'>
      <nav className='flex items-center justify-between py-6'>
        <ul className='flex space-x-3'>
          <li>
            <a href='mailto:zactec114@gmail.com?subject = Feedback&body = Message'>
              <i className='fa-solid fa-envelope fa-xl'></i>
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/zachtecson/' target='_blank'>
              <i className='cursor-pointer fa-brands fa-linkedin fa-xl'></i>
            </a>
          </li>
          <li>
            <a href='https://github.com/zachhh14' target='_blank'>
              <i className='fa-brands fa-github fa-xl'></i>
            </a>
          </li>
        </ul>
        <ul className='flex items-center space-x-3 text-xl'>
          <li>
            <button className='hidden w-28 md:block'>About</button>
          </li>
          <li>
            <button className='hidden w-28 md:block'>Projects</button>
          </li>
          <li>
            <button className='hidden w-36 md:block'>Certifications</button>
          </li>
          <li className='hidden md:block'>
            <button className='px-5 py-1.5 text-black bg-white rounded-md w-44'>
              Download CV
            </button>
          </li>
          <li className='block md:hidden'>
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </li>
        </ul>
      </nav>
      <ul
        className={`${
          isOpen ? 'md:hidden' : 'hidden'
        } flex flex-col justify-around text-xl py-6 h-60`}
      >
        <li>
          <button>About</button>
        </li>
        <li>
          <button>Projects</button>
        </li>
        <li>
          <button>Certifications</button>
        </li>
        <li>
          <button className='px-5 py-1.5 text-black bg-white rounded-md w-44'>
            Download CV
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
