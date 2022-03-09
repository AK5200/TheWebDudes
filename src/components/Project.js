import React from 'react'

const Project = ({src,index,text,link}) => {
    return (
        <div className='w-2/5 '>
            <a href={link}><img src={src} alt={`${index} project`} /></a>
            <p>{text}</p>
        </div>

            
    
    )
}

export default Project
