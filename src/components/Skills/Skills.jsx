import React from 'react';
import { FaReact, FaVuejs, FaBootstrap, FaLaravel, FaGithub, FaJira, FaBitbucket, FaFigma, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiCodeigniter, SiFlask, SiMongodb, SiSqlite, SiMui } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";

const Skills = () => {
    return(
        <div
            className='px-10 text-white lg:px-32 md:px-32 bg-background-color pt-9'
        >
            <h1  
                className='w-full text-4xl font-bold text-right sm:text-6xl lg:text-8xl lg:px-32'
                data-aos="fade-up"
            >
                Skills
            </h1>
            <div 
                className="bg-black min-h-[300px] lg:mt-[72px] mt-6 rounded-[40px] p-10 flex flex-col justify-between lg:flex-row 2xl:mx-52"
                data-aos="fade-left"
            >
                <div className="flex flex-col mb-2 lg:w-2/5">
                    <h2 className='text-3xl font-bold'>Frameworks</h2>
                    <div className="flex flex-wrap">
                        <a
                            href='https://getbootstrap.com/'
                            target='_blank'
                        >
                            <button className="p-4 mt-2 ml-2 rounded lg:p-6 bg-background-color hover:bg-white hover:text-black">
                                <FaBootstrap className='text-4xl lg:text-4xl'/>
                            </button>
                        </a>
                        <a
                            href="https://www.codeigniter.com/" 
                            target='_blank'
                        >
                            <button className="p-4 mt-2 ml-2 rounded lg:p-6 bg-background-color hover:bg-white hover:text-black">
                                <SiCodeigniter className='text-4xl'/>
                            </button>
                        </a>
                        <a
                            href="https://flask.palletsprojects.com/en/3.0.x/" 
                            target='_blank'
                        >
                            <button className="p-4 mt-2 ml-2 rounded lg:p-6 bg-background-color hover:bg-white hover:text-black">
                                <SiFlask className='text-4xl'/>
                            </button>
                        </a>
                        <a
                            href='https://laravel.com/'
                            target='_blank'
                        >
                            <button className="p-4 mt-2 ml-2 rounded lg:p-6 bg-background-color hover:bg-white hover:text-black">
                                <FaLaravel className='text-4xl'/>
                            </button>
                        </a>
                        <a
                            href='https://mui.com/'
                            target='_blank'
                        >
                            <button className="p-4 mt-2 ml-2 rounded lg:p-6 bg-background-color hover:bg-white hover:text-black">
                                <SiMui className='text-4xl'/>
                            </button>
                        </a>
                        <a  
                            href="https://react.dev/"
                            target='_blank'
                        >
                            <button className="p-4 mt-2 ml-2 rounded lg:p-6 bg-background-color hover:bg-white hover:text-black">
                                <FaReact className='text-4xl'/>
                            </button>
                        </a>
                        <a
                            href='https://tailwindcss.com/'
                            target='_blank'
                        >
                            <button className="p-4 mt-2 ml-2 rounded lg:p-6 bg-background-color hover:bg-white hover:text-black">
                                <SiTailwindcss className='text-4xl'/>
                            </button>
                        </a>
                        <a 
                            href="https://vuejs.org/"
                            target='_blank'
                        >
                            <button className="p-4 mt-2 ml-2 rounded lg:p-6 bg-background-color hover:bg-white hover:text-black">
                                <FaVuejs className='text-4xl'/>
                            </button>
                        </a>
                    </div>
                </div>
                <div className="flex flex-col lg:w-2/5">
                    <h2 className='text-3xl font-bold'>Other Technologies</h2>
                    <div className="flex flex-wrap">
                        <a 
                            href="https://bitbucket.org/"
                            target='_blank'
                        >
                            <button className="p-4 mt-2 ml-2 rounded lg:p-6 bg-background-color hover:bg-white hover:text-black">
                                <FaBitbucket className='text-4xl'/>
                            </button>
                        </a>
                        <a 
                            href="https://figma.com/"
                            target='_blank'
                        >
                            <button className="p-4 mt-2 ml-2 rounded lg:p-6 bg-background-color hover:bg-white hover:text-black">
                                <FaFigma className='text-4xl'/>
                            </button>
                        </a>
                        <a 
                            href="https://git-scm.com/"
                            target='_blank'
                        >
                            <button className="p-4 mt-2 ml-2 rounded lg:p-6 bg-background-color hover:bg-white hover:text-black">
                                <FaGitAlt className='text-4xl'/>
                            </button>
                        </a>
                        <a 
                            href="https://github.com/"
                            target='_blank'
                        >
                            <button className="p-4 mt-2 ml-2 rounded lg:p-6 bg-background-color hover:bg-white hover:text-black">
                                <FaGithub className='text-4xl'/>
                            </button>
                        </a>
                        <a 
                            href="https://jira.atlassian.com/"
                            target='_blank'
                        >
                            <button className="p-4 mt-2 ml-2 rounded lg:p-6 bg-background-color hover:bg-white hover:text-black">
                                <FaJira className='text-4xl'/>
                            </button>
                        </a>
                        <a 
                            href="https://mongodb.com/"
                            target='_blank'
                        >
                            <button className="p-4 mt-2 ml-2 rounded lg:p-6 bg-background-color hover:bg-white hover:text-black">
                                <SiMongodb className='text-4xl'/>
                            </button>
                        </a>
                        <a 
                            href="https://mysql.com/"
                            target='_blank'
                        >
                            <button className="p-4 mt-2 ml-2 rounded lg:p-6 bg-background-color hover:bg-white hover:text-black">
                                <GrMysql className='text-4xl'/>
                            </button>
                        </a>
                        <a 
                            href="https://nodejs.org/"
                            target='_blank'
                        >
                            <button className="p-4 mt-2 ml-2 rounded lg:p-6 bg-background-color hover:bg-white hover:text-black">
                                <FaNodeJs className='text-4xl'/>
                            </button>
                        </a>
                        <a 
                            href="https://sqlite.org/"
                            target='_blank'
                        >
                            <button className="p-4 mt-2 ml-2 rounded lg:p-6 bg-background-color hover:bg-white hover:text-black">
                                <SiSqlite className='text-4xl'/>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;