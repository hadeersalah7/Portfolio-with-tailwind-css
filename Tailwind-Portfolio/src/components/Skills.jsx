import React from 'react'
import SkillsTitle from './SkillsTitle'
import { skills } from '../data'
import SkillsCard from './SkillsCard'

const Skills = () => {
    return (
        <section className='py-20 align-element px-8' id="skills">
            <SkillsTitle text="tech stack" />
            <div className="py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skills.map((skill) => {
                    return <SkillsCard key={skill.id} {...skill} />
})}
            </div>
        </section>
    )
}

export default Skills