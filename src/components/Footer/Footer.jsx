import React from 'react';

function Footer() {
  return (
    <footer className='flex flex-col sm:flex-row justify-between p-6 md:px-20 items-center bg-black text-white'>
      <ul className='flex space-x-3 z-10 w-full mb-2 sm:mb-0'>
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
      <span className='font-light text-sm'>
        Designed in{' '}
        <strong className='font-bold hover:underline cursor-pointer'>
          <a href='https://www.figma.com/' target='_blank'>
            Figma
          </a>
        </strong>
        , Coded in{' '}
        <strong className='font-bold hover:underline cursor-pointer'>
          <a href='https://code.visualstudio.com/' target='_blank'>
            Visual Studio Code
          </a>
        </strong>
        , with{' '}
        <strong className='font-bold hover:underline cursor-pointer'>
          <a href='https://react.dev/' target='_blank'>
            React.JS
          </a>
        </strong>{' '}
        and{' '}
        <strong className='font-bold hover:underline cursor-pointer'>
          <a href='https://tailwindcss.com/' target='_blank'>
            Tailwind CSS
          </a>
        </strong>{' '}
        , Deployed with{' '}
        <strong className='font-bold hover:underline cursor-pointer'>
          <a href='https://github.com/' target='_blank'>
            GitHub
          </a>
        </strong>
        .
      </span>
    </footer>
  );
}

export default Footer;
