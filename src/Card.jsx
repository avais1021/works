import React from 'react'
import { FiExternalLink } from 'react-icons/fi'
const Card = (props) => {
    
    return (
        <div className='cardWrapper'>
        <a href={props.hrefUrl} >  
        <div className="card">
            <img src={props.imagePath} alt="ecomerce" />
            <h2>{props.name}</h2>
            <span>Open <FiExternalLink /></span>
        </div>
        </a>
        <a href={props.sourceCode} className='sourceC'>Source Code <FiExternalLink /></a>
        </div>
    )
}

export default Card
