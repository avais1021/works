import React from 'react'
import ReactProjects from './ReactProjects'
import HtmlProjects from './HtmlProjects'
import JavascriptProjects from './JavascriptProjects'
import Nav from './Nav'


const MyWorkPage = () => {
    return (
        <>
            <Nav/>
            <div className="section my_works">
                <div className="container">
                    <h1>My Works</h1>
                </div>
            </div>
            <ReactProjects />
            <HtmlProjects />
            <JavascriptProjects />
        </>
    )
}

export default MyWorkPage
