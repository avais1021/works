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
                                return ele.category === "js" ? <Card id={ele.id} key={idx} hrefUrl={ele.url} imagePath={ele.image} name={ele.projectName} /> : "";
                            })}
                            <div className="card">
                            <button onClick={() => JsProjectFilterQty()}>{JsbtnValLatest ? 'View All' : 'Show Less'}</button>
                            </div>
                            {/* <Card hrefUrl="https://avais1021.github.io/Content-Kingdom/" imagePath="purchase-book.png" name="Purchasing Books" />
                        <Card hrefUrl="https://avais1021.github.io/Find-Items/" imagePath="find-item.png" name="App For Medical" />
                        <Card hrefUrl="https://avais1021.github.io/income-management/" imagePath="monthly-budget.png" name="Monthly Budget Tracker" />
                        <Card hrefUrl="https://avais1021.github.io/Search_functionality/" imagePath="search-functionality.png" name="Search your favourite developer" />
                        <Card hrefUrl="https://avais1021.github.io/Weather-App/" imagePath="search-weather.png" name="Search Weather" />
                        <Card hrefUrl="https://avais1021.github.io/Search-A-Github-User/" imagePath="github-user.png" name="Search Github User" />
                        <Card hrefUrl="https://avais1021.github.io/e-comerce-cart-page/" imagePath="cart-page.png" name="Cart Page" />
                        <Card hrefUrl="https://avais1021.github.io/TO-DO-LIST/" imagePath="todolist.png" name="To-Do List" />
                        <Card hrefUrl="https://avais1021.github.io/Notes-Taking-App/" imagePath="notes-taking.png" name="Notes Taking App" />
                        <Card hrefUrl="https://avais1021.github.io/Match-the-images-game/" imagePath="match-image.png" name="Match the Images" />
                        <Card hrefUrl="https://avais1021.github.io/Car-game-js/" imagePath="carGame.png" name="Car Game" />
                        <Card hrefUrl="https://avais1021.github.io/Tic_Tac_Toe_Game/" imagePath="tic-toe.png" name="Tic Tac Toe Game" />
                        <Card hrefUrl="https://avais1021.github.io/Word-Scramble-Game/" imagePath="word-scramble.png" name="Word Scramble Game" />
                        <Card hrefUrl="https://avais1021.github.io/password-generator/" imagePath="password-generator.png" name="Password Generator" />
                        <Card hrefUrl="https://avais1021.github.io/Quiz/" imagePath="quiz.png" name="Quiz" />
                        <Card hrefUrl="https://avais1021.github.io/Interview/" imagePath="interview.png" name="Interview" /> */}


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JavascriptProjects
