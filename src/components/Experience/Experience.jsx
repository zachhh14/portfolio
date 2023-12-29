import React from 'react';
import ExperienceCard from './ExperienceCard';

function Experience() {
  return (
    <div
      id='experiences-section'
      className='lg:px-32 md:px-32 px-10 px-10 bg-background-color min-h-[899px] pt-12 text-white'
    >
      <h1 className='w-full text-4xl font-bold text-right sm:text-6xl lg:text-8xl lg:px-32 md:px-32'>
        Experience
      </h1>
      <div className='flex flex-col xl:flex-row w-full justify-center items-center mt-6 lg:space-x-3 > * lg:mt-20 text-black'>
        <ExperienceCard
          position='Full-stack Developer'
          company='Freelance'
          date='Oct 2023 - Present'
          description='Collaborated with other independent developer on creating a web based project management tool.'
        />
        <ExperienceCard
          position='Software Developer'
          company='Technomancer Inc.'
          date='Feb 2023 - Sep 2023'
          description='Assigned to creating business solutions for business like, Employee Maintenance, Payroll System, E-commerce Website.'
        />
        <ExperienceCard
          position='Front-end Developer'
          company='Hacktiv Colab Inc.'
          date='Aug 2022 - Oct 2022'
          description='Assigned in converting Figma design to a static websites. Participated in Daily Stand up Meeting where we breakdown tasks into smaller task.'
        />
      </div>
    </div>
  );
}

export default Experience;
