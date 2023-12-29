import React from 'react';
import ZachPicture from '../../assets/zach-picture.svg';
import './About.css';
import { SiTailwindcss, SiCodeigniter, SiFlask } from 'react-icons/si';
import { RiBootstrapLine } from 'react-icons/ri';
import { FiDownload } from "react-icons/fi";
import Resume from '/resume.pdf';

function About() {
  return (
    <div
      id='about-section'
      className='w-full md:px-32 px-10 bg-background-color min-h-[899px] pt-9'
    >
      <h1 className='w-full text-4xl font-semibold text-white sm:text-6xl lg:text-8xl lg:px-32'>
        About me
      </h1>
      <main className='flex flex-col item-center px-0 lg:flex-row lg:mt-[72px] mt-6 w-full'>
        <aside className='w-full mb-5 lg:w-6/12 lg:mb-0'>
          <img src={ZachPicture} alt='zach_picture' className='m-auto' />
        </aside>
        <article className='text-white lg:w-6/12 lg:mr-2'>
          <h2 className='text-4xl font-bold sm:text-6xl'>Zachary Tecson</h2>
          <section className='mb-5 address'>
            <i className='mr-2 fa-solid fa-location-dot'></i>
            <span className='font-light'>
              Caloocan, Metro Manila (NCR), Philippines
            </span>
          </section>
          <p className='mb-2 sm:text-xl'>
            🎓 Graduated with a Diploma in Information Communication Technology 
            from Polytechnic University of the Philippines. Currently taking 
            bachelor's degree in Information Technology at Polytechnic University 
            of the Philippines.
          </p>
          <p className='mb-5 sm:text-xl'>
            💼 With 1 year of experience in internship, part-time work, and 
            freelance as a software developer, my skills include{' '}
            <strong className='hover:underline'>
              <a
                href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'
                target='_blank'
              >
                JavaScript
              </a>
            </strong>,{' '}
            <strong className='hover:underline'>
              <a href='https://www.php.net/' target='_blank'>
                PHP
              </a>
            </strong>, {' '}
            <strong className='hover:underline'>
              <a href='https://www.python.org/' target='_blank'>
                Python
              </a>
            </strong>, {' '}etc.
          </p>
          <h2 className='mb-2 text-4xl font-bold'>Frameworks</h2>
          <section className='bg-black px-5 mb-6 pb-5 pt-[14px] rounded-2xl'>
            <ul className='flex flex-wrap flex-start skills-list'>
              <li className='my-auto'>
                <a href='https://react.dev/' target='_blank'>
                  <i className='fa-brands fa-react'></i> React.JS
                </a>
              </li>
              <li>
                <a href='https://vuejs.org/' target='_blank'>
                  <i className='fa-brands fa-vuejs'></i> Vue.JS
                </a>
              </li>
              <li>
                <a
                  href='https://getbootstrap.com/'
                  target='_blank'
                  className='flex items-center'
                >
                  <RiBootstrapLine className='mr-1' />
                  Bootsrap CSS
                </a>
              </li>
              <li>
                <a
                  href='https://tailwindcss.com/'
                  target='_blank'
                  className='flex items-center'
                >
                  <SiTailwindcss className='mr-1' />
                  Tailwind CSS
                </a>
              </li>
              <li>
                <a href='https://laravel.com/'>
                  <i className='fa-brands fa-laravel' target='_blank'></i>{' '}
                  Laravel
                </a>
              </li>
              <li>
                <a
                  href='https://codeigniter.com/'
                  target='_blank'
                  className='flex items-center'
                >
                  <SiCodeigniter className='mr-1' />
                  Codeigniter
                </a>
              </li>
              <li>
                <a href='https://nodejs.org/en' target='_blank'>
                  <i className='fa-brands fa-node-js'></i> Node JS
                </a>
              </li>
              <li>
                <a 
                  href='https://flask.palletsprojects.com/en/3.0.x/' 
                  target='_blank'
                  className='flex items-center'
                >
                  <SiFlask className='mr-1'/> Flask
                </a>
              </li>
            </ul>
          </section>
          <a href={Resume} target='_blank'>
            <button className='flex items-center p-3 mb-2 font-bold text-black bg-white rounded-xl hover:underline'>
              <FiDownload className='mr-2 text-black'/>
              Download Resume
            </button>
          </a>
        </article>
      </main>
    </div>
  );
}

export default About;
