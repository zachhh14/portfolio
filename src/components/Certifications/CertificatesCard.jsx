import React from 'react';

function CerficatesCard(props) {
  return (
    <section className='bg-white rounded-[40px] min-h-[112px] h-full max-h-[500px] p-9 flex flex-col text-black m-[5px] justify-between'>
      <div>

      <h1 className='text-xl font-bold'>{props.name}</h1>
      <span className='font-light'>{props.trainingInstitue}</span>
      </div>
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
