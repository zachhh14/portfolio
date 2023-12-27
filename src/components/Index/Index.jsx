import React from 'react';
import './Index.css';

function Index() {
  return (
    <div className='p-40 text-center md:p-60 hero-section'>
      <div className='flex flex-col items-center text-white intro-message'>
        <h1 className='text-3xl font-normal md:text-4xl mb-7'>
          Hello, I'm <br />
          <strong className='text-4xl font-bold whitespace-nowrap md:text-6xl'>
            Zachary Tecson
          </strong>
        </h1>
        <hr />
        <span className='mt-4 text-xl font-light whitespace-nowrap md:text-2xl'>
          Software Developer
        </span>
      </div>
    </div>
  );
}

export default Index;
