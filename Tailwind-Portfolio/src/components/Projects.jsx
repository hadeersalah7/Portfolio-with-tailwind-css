import React from 'react'
import SkillsTitle from './SkillsTitle'
import { projects } from '../data'
import ProjectsCard from './ProjectsCard'

const Projects = () => {
    return (
        <section className='align-elements py-20' id='projects'>
            <SkillsTitle text='web creations' />
            <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {projects.map((project) => {
                    return <ProjectsCard key={project.id} {...project} />
                })}
            </div>
        </section>
    )
}

export default Projects