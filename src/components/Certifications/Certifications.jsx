import React from 'react';
import CerficatesCard from './CertificatesCard';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

function Certifications() {
  return (
    <div className='px-10 py-12 text-white h-3/4 bg-background-color lg:px-32 md:px-32'>
      <h1 className='w-full mb-6 text-5xl font-bold text-right sm:text-6xl lg:text-8xl lg:px-32 lg:mb-20'>
        Certifications
      </h1>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 765: 2, 1435: 3 }}>
        <Masonry>
          <CerficatesCard
            name='Creative Web Design'
            trainingInstitue='Mindtech Training and Development Institute Inc.'
            link='https://drive.google.com/file/d/1uq0MQG8dGp2M7ChDsgi7iGoIZ5pg7d6W/view?usp=sharing'
          />
          <CerficatesCard
            name='Programming (Java) NC III'
            trainingInstitue='Joysis Tech Voc Inc.'
            link='https://drive.google.com/file/d/1tu5pFjF_-Cv4tFUWJr6mal4X_WYQnE2d/view?usp=sharing'
          />
          <CerficatesCard
            name='Responsive Web Design'
            trainingInstitue='freeCodeCamp'
            link='https://drive.google.com/file/d/1Bn7udj0IhxSrQ4uw79PhWyvWkguKmr-q/view?usp=sharing'
          />
          <CerficatesCard
            name='Introduction to Data Science in Python'
            trainingInstitue='Data Camp'
            link='https://drive.google.com/file/d/1wRE9JSJu9vU-QtBNLr1WO7RQkB8L0Rbb/view?usp=sharing'
          />
          <CerficatesCard
            name='Understanding Data Science'
            trainingInstitue='Data Camp'
            link='https://drive.google.com/file/d/1VG5oTqBYXGXz2HUHHk41ytnS_IuS8a_t/view?usp=sharing'
          />
          <CerficatesCard
            name='Understanding Machine Learning'
            trainingInstitue='Data Camp'
            link='https://drive.google.com/file/d/1Hx9FGQTOBOBaZhezmXFoC5hGfn1HTLxi/view?usp=sharing'
          />
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}

export default Certifications;
