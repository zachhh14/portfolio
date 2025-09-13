import ExperienceCard from './ExperienceCard'

function Experience() {
    const EXPERIENCE = [
        {
            position: 'Front-end Developer',
            company: 'SoluxionLab Inc.',
            date: 'Feb 2025 - Present',
            description:
                'Build intuitive and responsive dashboards and user interfaces using ReactJS and Vite while collaborating with cross-functional teams to design, develop, and deliver new features, as well as performing regular maintenance, updates, and patches to ensure ongoing application stability.',
        },
        {
            position: 'Software Developer',
            company: 'Freelance/Self Employed',
            date: 'Oct 2023 - Feb 2025',
            description:
                'Delivered web and mobile solutions, developed project management tools and job posting platforms, and secured diverse projects on Upwork while ensuring client satisfaction through effective collaboration.',
        },
        {
            position: 'Software Developer',
            company: 'Technomancer Inc.',
            date: 'Feb 2023 - Sep 2023',
            description:
                'Assigned to creating business solutions for business like, Employee Maintenance, Payroll System, E-commerce Website.',
        },
    ]
    return (
        <div
            id='experiences-section'
            className='lg:px-32 md:px-32 px-10 bg-background-color min-h-[700px] pt-12 text-white'
        >
            <h1
                className='w-full text-4xl font-bold text-right sm:text-6xl lg:text-8xl lg:px-32 md:px-32'
                data-aos='fade-up'
            >
                Experience
            </h1>
            <div
                className='flex flex-col xl:flex-row w-full justify-center items-center mt-6 lg:space-x-3 > * lg:mt-20 text-black'
                data-aos='fade-left'
            >
                {EXPERIENCE.map((exp, index) => (
                    <ExperienceCard
                        key={index}
                        position={exp.position}
                        company={exp.company}
                        date={exp.date}
                        description={exp.description}
                    />
                ))}
            </div>
        </div>
    )
}

export default Experience
