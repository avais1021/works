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
                                return ele.category === "react" ? <Card id={ele.id} key={idx} hrefUrl={ele.url} sourceCode={ele.sourceCode} imagePath={ele.image} name={ele.projectName} /> : "";                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReactProjects
