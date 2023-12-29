import React, { useEffect, useState } from 'react'
import Card from './Card'
import projectData from './projectData'

const JavascriptProjects = () => {
    const [JsbtnValLatest, setJsBtnValLatest] = useState(false)
    const [JsQtyCard, setJsQtyCard] = useState([])

    const JsProjectFilterQty = () => {
        setJsBtnValLatest(!JsbtnValLatest)
        if(JsbtnValLatest === false){
            let copyProjectData = [...projectData];
            let storeCopyData = copyProjectData.filter((ele) => {
                return ele.category === "js" 
            })
            setJsQtyCard(storeCopyData.slice(0,7));
        }
        else{
            let copyProjectData = [...projectData];
            let storeCopyData = copyProjectData.filter((ele) => {
                return ele.category === "js" 
            })
            setJsQtyCard(storeCopyData)
        }
    }


    useEffect(() => {
        JsProjectFilterQty()
    }, [])
    return (
        <>
            <div className="section js_projects">
                <div className="container">
                    <h1>Javascript Projects :</h1>
                    <div className="projects">
                    <h2></h2>
                        <div className="group">
                            {JsQtyCard.map((ele, idx) => {
                                return ele.category === "js" ? <Card id={ele.id} key={idx} hrefUrl={ele.url} sourceCode={ele.sourceCode} imagePath={ele.image} name={ele.projectName} /> : "";
                            })}
                            <div className="card">
                            <button onClick={() => JsProjectFilterQty()}>{JsbtnValLatest ? 'View All' : 'Show Less'}</button>
                            </div>
                            


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JavascriptProjects
