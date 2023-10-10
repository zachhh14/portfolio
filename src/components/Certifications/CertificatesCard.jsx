import React from 'react';

function CerficatesCard(props) {
  return (
    <section className='bg-white rounded-[40px] min-h-[112px] h-full max-h-[500px] p-9 flex flex-col text-black m-[5px]'>
      <h1 className='text-2xl font-bold'>{props.name}</h1>
      <span>{props.trainingInstitue}</span>
      <a
        href={props.link}
        target='_blank'
        className='hover:underline'
      >
        View Certificates <i className='fa-solid fa-arrow-right'></i>
      </a>
    </section>
  );
}

export default CerficatesCard;
