import React from 'react'
const Card = (props) => {
    
    return (    
        <a href={props.hrefUrl} >  
        <div className="card">
            <img src={props.imagePath} alt="ecomerce" />
            <h2>{props.name}</h2>
        </div>
        </a>
    )
}

export default Card
