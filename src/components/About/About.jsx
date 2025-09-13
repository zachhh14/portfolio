import { FiDownload } from 'react-icons/fi'
import ZachPicture from '../../assets/zach-picture.svg'
import './About.css'
import Resume from '/resume.pdf'

function About() {
    return (
        <div
            id='about-section'
            className='w-full md:px-32 px-10 bg-background-color min-h-[899px] pt-9'
        >
            <h1
                className='w-full text-4xl font-bold text-white sm:text-6xl lg:text-8xl lg:px-32'
                data-aos='fade-up'
            >
                About me
            </h1>
            <main
                className='flex flex-col item-center px-0 lg:flex-row lg:mt-[72px] mt-6 w-full'
                data-aos='fade-left'
            >
                <aside className='w-full mb-5 lg:w-6/12 lg:mb-0'>
                    <img
                        src={ZachPicture}
                        alt='zach_picture'
                        className='m-auto'
                    />
                </aside>
                <article className='text-white lg:w-6/12 lg:mr-2'>
                    <h2 className='mb-1 text-4xl font-bold sm:text-6xl'>
                        John Zachary Mereul Tecson
                    </h2>
                    <section className='mb-5 address'>
                        <i className='mr-2 fa-solid fa-location-dot'></i>
                        <span className='font-light'>
                            Caloocan, Metro Manila (NCR), Philippines
                        </span>
                    </section>

                    <p className='mb-2 sm:text-xl'>
                        🎓 Bachelor of Science in Information Technology student
                        at the Polytechnic University of the Philippines.
                        Previously earned a Diploma in Information Communication
                        Technology from the same university.
                    </p>
                    <p className='mb-5 sm:text-xl'>
                        💼 1+ year of combined experience in internship,
                        part-time roles, and freelance work as a software
                        developer. Skilled in building web applications using{' '}
                        <a
                            href='https://www.typescriptlang.org/docs/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='font-bold hover:underline'
                        >
                            Typescript
                        </a>
                        ,{' '}
                        <a
                            href='https://www.php.net/docs.php'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='font-bold hover:underline'
                        >
                            PHP
                        </a>
                        ,{' '}
                        <a
                            href='https://react.dev/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='font-bold hover:underline'
                        >
                            React
                        </a>
                        ,{' '}
                        <a
                            href='https://laravel.com/docs'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='font-bold hover:underline'
                        >
                            Laravel
                        </a>
                        ,{' '}
                        <a
                            href='https://nextjs.org/docs'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='font-bold hover:underline'
                        >
                            Next.js
                        </a>{' '}
                        and etc. with experience in both frontend and backend
                        development.
                    </p>
                    <a href={Resume} target='_blank'>
                        <button className='flex items-center p-3 mb-2 font-bold text-black bg-white rounded-xl hover:underline'>
                            <FiDownload className='mr-2 text-black' />
                            Download Resume
                        </button>
                    </a>
                </article>
            </main>
        </div>
    )
}

export default About
