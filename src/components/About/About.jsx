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

                    <div className='max-w-2xl mb-5 space-y-4 sm:text-xl'>
                        <p>
                            🎓 BS Information Technology graduate from the
                            Polytechnic University of the Philippines.
                        </p>

                        <p>
                            💼 Software developer with hands-on experience
                            across internships, freelance work, and full-time
                            roles, building scalable and efficient applications
                            using{' '}
                            <a
                                href='https://www.typescriptlang.org/docs/'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='font-bold hover:underline'
                            >
                                TypeScript
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
                            , and{' '}
                            <a
                                href='https://nextjs.org/docs'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='font-bold hover:underline'
                            >
                                Next.js
                            </a>
                            .
                        </p>

                        <p>
                            🚀 Focused on creating reliable, user-centered
                            solutions and continuously improving across
                            different areas of software development.
                        </p>
                    </div>
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
