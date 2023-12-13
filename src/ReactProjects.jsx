import React from 'react'
import Card from './Card'
import projectData from './projectData'

const ReactProjects = () => {
    return (
        <>
            <div className="section react_projects">
                <div className="container">
                    <h1>React Projects :</h1>
                    <div className="projects">
                    <h2></h2>
                        <div className="group">
                            {projectData.map((ele , idx)=>{
                                return ele.category === "react" ? <Card id={ele.id} key={idx} hrefUrl={ele.url} imagePath={ele.image} name={ele.projectName} /> : "";                            })}
                            {/* <Card hrefUrl="https://react-ecommerce-nu-silk.vercel.app/" imagePath="ecomerce.png" name="E-comerce Website" />
                            <Card hrefUrl="https://avais1021.github.io/check-weather-REACT/" imagePath="check_wheather.png" name="Check Wheather" /> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReactProjects
