import React from 'react'
import Project from './Project.js'

const Projects = ({projects}) => {
    return (
       
    <div className="flex flex-wrap gap-32 pt-8 pb-8 text-2xl pl-28 ">
     {projects.map((item,index)=>(
     <Project key={item.image} index={index} src={item.image} text={item.text} link={item.link} />    
     ))}

    </div>

    
    )
}

export default Projects
