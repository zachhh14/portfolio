import React from 'react';
import './About.css';
import ZachPicture from '../../assets/zach-picture.svg';

function About() {
  return (
    <div className='w-full px-32 bg-background-color h-[899px] pt-9'>
      <h1 className='w-full font-semibold text-white text-8xl'>About me</h1>
      <main className='flex mt-[72px] px-36'>
        <aside className='w-6/12'>
          <img src={ZachPicture} alt='zach_picture' className='' />
        </aside>
        <article className='w-6/12 mr-2 text-white'>
          <h2 className='text-6xl font-medium'>Zachary Tecson</h2>
          <section className='mb-5 address'>
            <i className='mr-2 fa-solid fa-location-dot'></i>
            <span className='font-light'>
              Caloocan, Metro Manila (NCR), Philippines
            </span>
          </section>
          <p className='mb-2 text-2xl font-normal'>
            🎓 Graduated with a Diploma in Information Communication Technology
            from Polytechnic University of the Philippines.
          </p>
          <p className='text-2xl'>
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
