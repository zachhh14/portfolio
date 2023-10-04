import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className='fixed z-10 flex items-center justify-between w-full px-20 py-6 bg-black opacity-80 '>
      <ul className='flex space-x-3 text-white'>
        <li>
          <a href='mailto:abc@example.com?subject = Feedback&body = Message'>
            <i class='fa-solid fa-envelope fa-xl'></i>
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/zachtecson/' target='_blank'>
            <i className='cursor-pointer fa-brands fa-linkedin fa-xl'></i>
          </a>
        </li>
        <li>
          <a href='https://github.com/zachhh14' target='_blank'>
            <i class='fa-brands fa-github fa-xl'></i>
          </a>
        </li>
      </ul>
      <ul className='flex items-center space-x-3 text-xl text-white cursor-pointer'>
        <li>
          <button className='w-28'>About</button>
        </li>
        <li>
          <button className='w-28'>Projects</button>
        </li>
        <li>
          <button className='w-36'>Certifications</button>
        </li>
        <li>
          <button className='px-5 py-1.5 text-black bg-white rounded-md w-44'>
            Download CV
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
