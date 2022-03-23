import React from 'react'

const Section = ({title, description}) => {
    
    return (
        <div className='section-div'>
            <h2 className='section-title'>{title}</h2>
            <p className='section-description'>{description}</p>
        </div>
    )
}

export default Section