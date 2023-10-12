import React from 'react';
import ExperienceCard from './ExperienceCard';

function Experience() {
  return (
    <div
      id='experiences'
      className='lg:px-32 px-10 bg-background-color mim-h-[899px] pt-12 text-white'
    >
      <h1 className='w-full text-4xl font-bold sm:text-6xl lg:text-8xl lg:px-32 md:px-32'>
        Experience
      </h1>
      <div className='flex flex-wrap justify-center mt-6 lg:space-x -3 > * lg:mt-20 text-black'>
        <ExperienceCard
          position='Front-end Web Developer (Intern)'
          company='Hacktiv Colab Inc.'
          date='Aug 2022 - Oct 2022'
          description='Assigned in converting Figma design to a static websites. Participated in Daily Stand up Meeting where we breakdown tasks into smaller task.'
        />
        <ExperienceCard
          position='Full-stack Web Developer (Intern)'
          company='Technomancer Inc.'
          date='Feb 2022 - Sep 2022'
          description='Assigned to creating business solutions for business like, Employee Maintenance, Payroll System, E-commerce Website'
        />
      </div>
    </div>
  );
}

export default Experience;
