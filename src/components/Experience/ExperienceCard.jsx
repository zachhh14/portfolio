import React from 'react';

function ExperienceCard(props) {
  return (
    <section className='flex flex-col justify-between bg-white max-w-[575px] h-96 rounded-[40px] p-10 sm:p-14 m-1.5'>
      <div>
        <h2 className='text-2xl font-bold sm:text-3xl md:text-4xl'>
          {props.position}
        </h2>
        <h3>{props.company}</h3>
        <span>{props.date}</span>
      </div>
      <p>{props.description}</p>
    </section>
  );
}

export default ExperienceCard;
