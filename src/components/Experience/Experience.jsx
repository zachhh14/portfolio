import React from 'react';

function Experience() {
  return (
    <div className='lg:px-32 px-10 bg-background-color mim-h-[899px] pt-12 text-white'>
      <h1 className='w-full text-6xl font-bold lg:text-8xl lg:px-32 md:px-32'>
        Experience
      </h1>
      <div className='flex flex-wrap justify-center lg:space-x-3 > * lg:mt-20 text-black'>
        <section className='flex flex-col justify-between bg-white max-w-[575px] h-96 rounded-[40px] p-14 2xl:m-0 mt-6'>
          <div>
            <h2 className='text-4xl font-bold'>
              Front-end Web Developer (Intern)
            </h2>
            <h3>Hacktiv Colab Inc.</h3>
            <span>Aug 2022 - Oct 2022</span>
          </div>
          <p>
            Assigned in converting Figma design to a static websites.
            Participated in Daily Stand up Meeting where we breakdown tasks into
            smaller task.
          </p>
        </section>
        <section className='flex flex-col justify-between bg-white max-w-[575px] h-96 rounded-[40px] p-14 2xl:m-0 mt-2'>
          <div>
            <h2 className='text-4xl font-bold'>
              Full-stack Web Developer (Part-time)
            </h2>
            <h3>Technomancer Inc.</h3>
            <span>Feb 2023 - Sep 2022</span>
          </div>
          <p>
            Assigned to creating business solutions for business like, Employee
            Maintenance, Payroll System, E-commerce Website
          </p>
        </section>
      </div>
    </div>
  );
}

export default Experience;
