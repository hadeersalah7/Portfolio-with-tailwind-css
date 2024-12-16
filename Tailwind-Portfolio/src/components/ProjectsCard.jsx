import React from 'react'
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';
const ProjectsCard = ({ url, github, img, title, text }) => {
    return (
        <article className='bg-white rounded-lg shadow-md hover:shadow-xl duration-300'>
            <img src={img} alt={text} className='w-full object-cover rounded-t-lg h-64' />
            <div className="capitalize p-8">
                <h2 className='text-xl tracking-wide font-medium'>{title}</h2>
                <p className='mt-4 leading-loose text-slate-700'>{text}</p>
                <div className="mt-4 flex gap-x-4">
                    <a href={url}>
                        <TbWorldWww className='h-8 w-8 text-slate-500 hover:text-black
                        duration-300'/>
                    </a>
                    <a href={github}>
                        <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black
                        duration-300'/>
                    </a>
                </div>
            </div>
        </article>
    )
}

export default ProjectsCard