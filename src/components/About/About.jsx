import React from 'react';
import ZachPicture from '../../assets/zach-picture.svg';

function About() {
  return (
    <div id='about-section' className='w-full md:px-32 px-10 bg-background-color min-h-[899px] pt-9'>
      <h1 className='w-full text-4xl font-semibold text-white sm:text-6xl lg:text-8xl lg:px-32'>
        About me
      </h1>
      <main className='flex flex-col item-center px-0 lg:flex-row lg:mt-[72px] mt-6 w-full'>
        <aside className='w-full lg:w-6/12 '>
          <img src={ZachPicture} alt='zach_picture' className='m-auto' />
        </aside>
        <article className='text-white lg:w-6/12 lg:mr-2'>
          <h2 className='text-6xl font-medium'>Zachary Tecson</h2>
          <section className='mb-5 address'>
            <i className='mr-2 fa-solid fa-location-dot'></i>
            <span className='font-light'>
              Caloocan, Metro Manila (NCR), Philippines
            </span>
          </section>
          <p className='mb-2 text-xl'>
            🎓 Graduated with a Diploma in Information Communication Technology
            from Polytechnic University of the Philippines.
          </p>
          <p className='text-xl'>
            💼 With an 11-month web development internship experience and
            part-time work as a web developer, my skills include JavaScript and
            PHP.
          </p>
        </article>
      </main>
      {/* TODO: create a skills section here */}
    </div>
  );
}

export default About;
