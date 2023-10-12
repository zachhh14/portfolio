import React, { useState } from 'react';
import './Navbar.css';
import { Fade as Hamburger } from 'hamburger-react';
import Resume from '/resume.pdf';
import ZtLogo from '../../assets/ZT-logo-large.svg';

function Navbar() {
  // for hamburger functionality
  const [isOpen, setOpen] = useState(false);

  return (
    <div className='fixed z-10 w-full px-6 text-white bg-black md:px-20 opacity-80 parent-navbar'>
      <nav className='flex items-center justify-between py-6'>
        <a href='/'>
          <img src={ZtLogo} alt='zt_logo' className='opacity-100' />
        </a>
        <ul className='flex items-center space-x-3 text-xl'>
          <li>
            <button className='hidden w-28 md:block hover:font-bold'>
              <a href='#about-section'>About</a>
            </button>
          </li>
          <li>
            <button className='hidden w-28 md:block hover:font-bold'>
              <a href='#projects-section'>Projects</a>
            </button>
          </li>
          <li>
            <button className='hidden w-28 md:block hover:font-bold'>
              <a href='#experiences-section'>Experience</a>
            </button>
          </li>
          <li>
            <button className='hidden w-36 md:block hover:font-bold'>
              <a href='#certifications-section'>Certifications</a>
            </button>
          </li>
          <li className='hidden w-36 md:block'>
            <a href={Resume} target='_blank'>
              <button className='px-5 py-1.5 text-black bg-white rounded-md w-full hover:font-bold font-inter'>
                Resume
              </button>
            </a>
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
          <button className='hover:font-bold'>
            <a href='#about-section'>About</a>
          </button>
        </li>
        <li>
          <button className='hover:font-bold'>
            <a href='#projects-section'>Projects</a>
          </button>
        </li>
        <li>
          <button className='hover:font-bold'>
            <a href='#experiences-section'>Experience</a>
          </button>
        </li>
        <li>
          <button className='hover:font-bold'>
            <a href='#certifications-section'>Certifications</a>
          </button>
        </li>
        <li>
          <a href={Resume} target='_blank'>
            <button className='text-black bg-white rounded-md w-36 hover:font-bold'>
              Resume
            </button>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
