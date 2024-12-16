import React from 'react'
import aboutSvg from '../assets/about.svg';
import SkillsTitle from './SkillsTitle.jsx';
const About = () => {
    return (
        <section className='bg-white py-20' id="about">
            <div className="align-element grid md:grid-cols-2 items-center gap-16">
                <img src={aboutSvg} className='w-full h-64' />
                <article>
                    <SkillsTitle text="code and coffee" />
                    <p className='text-slate-600 mt-8 leading-loose'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, nisi atque. Cumque, iusto! Corporis nisi, illo sequi, quam iure reiciendis dolorum fugit mollitia nostrum, in similique quibusdam. Nihil, culpa reprehenderit?</p>
                </article>
            </div>
        </section>
    )
}

export default About