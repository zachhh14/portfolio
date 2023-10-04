import React from 'react';
import './Index.css';
import Background from '../assets/Background.svg';

function Index() {
  return (
    <div
      className='hero-section text-center'
    >
      <div className='intro-message text-white'>
        <h1 className='text-3xl'>
          Hello, I'm <br />
          <strong className='text-7xl'>Zachary Tecson</strong>
        </h1>
        <hr />
        <span>Full Stack Web Developer</span>
      </div>
    </div>
  );
}

export default Index;
