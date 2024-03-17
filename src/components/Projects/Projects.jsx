import React from 'react';
import PiliPinas from '../../assets/pili-pinas.png';
import RockPaperScissor from '../../assets/rock-paper-scissor.png';
import './Projects.css';

function Project() {
  return (
    <div
      className='lg:px-32 md:px-32 px-10 bg-background-color min-h-[700px] pt-12 text-white'
    >
      <h1 
        className='w-full text-4xl font-bold sm:text-6xl lg:text-8xl lg:px-32'
        data-aos="fade-up"
      >
        Recent projects
      </h1>
      <div 
        className='flex flex-col items-center lg:flex-row justify-center w-full lg:space-x-3 > * lg:mt-20 mt-6'
        data-aos="fade-left"
      >
        <a href='https://pili-pinas.onrender.com/' target='_blank'>
          <section className='relative project-card'>
            <h2 className='absolute hidden text-4xl font-bold text-center inset-28 project-title'>
              Pili-pinas
            </h2>
            <span className='absolute bottom-[40px] right-[40px] hidden underline text-lg'>
              Visit
            </span>
            <img src={PiliPinas} alt='pili-pinas picture screenshot' />
          </section>
        </a>
        <a
          href='https://zachhh14.github.io/rock-paper-scissor/'
          target='_blank'
        >
          <section className='relative shad project-card'>
            <h2 className='absolute hidden text-4xl font-bold text-center inset-28 project-title'>
              Rock Paper Scissors
            </h2>
            <span className='absolute bottom-[40px] right-[40px] hidden underline text-lg'>
              Visit
            </span>
            <img
              src={RockPaperScissor}
              alt='rockpaperscissor picture screenshot'
            />
          </section>
        </a>
      </div>
    </div>
  );
}

export default Project;
