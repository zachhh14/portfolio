import React, { useState } from 'react';
import './Navbar.css';
import { Fade as Hamburger } from 'hamburger-react';

function Navbar() {
  const [isOpen, setOpen] = useState(false);

  const readThis = () => {
    console.log(isOpen);
  };
  return (
    <nav className={`fixed z-10 flex flex-col w-full px-20 py-6 text-white bg-black opacity-80 ${isOpen ? 'h-96':'' } `}>
      <div className='flex items-center justify-between w-full'>
        <ul className='flex space-x-3 '>
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
        <ul className='flex items-center space-x-3 text-xl cursor-pointer tabs'>
          <li>
            <button className='w-28 tab'>About</button>
          </li>
          <li>
            <button className='w-28 tab'>Projects</button>
          </li>
          <li>
            <button className='w-36 tab'>Certifications</button>
          </li>
          <li className='cv-button'>
            <button className='px-5 py-1.5 text-black bg-white rounded-md w-44'>
              Download CV
            </button>
          </li>
          <li className='hidden hamburger' onClick={() => readThis()}>
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </li>
        </ul>
      </div>
      <ul className={`${!isOpen ? 'hidden' : 'flex flex-col justify-around h-full text-xl'}`}>
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
    </nav>
  );
}

export default Navbar;
