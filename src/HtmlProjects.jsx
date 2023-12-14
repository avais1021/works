import React, { useEffect, useState } from 'react'
import Card from './Card'
import projectData from './projectData'

const HtmlProjects = () => {
    const [btnValLatest, setBtnValLatest] = useState(false)
    const [btnValOldest, setBtnValOldest] = useState(false)
    const [filterQtyCardLatest, setFilterQtyCardLatest] = useState([])
    const [filterQtyCardOldest, setFilterQtyCardOldest] = useState([])
    console.log(btnValLatest, 'btn Val')

    const LatestProjectFilterQty = () => {
        setBtnValLatest(!btnValLatest)
        if (btnValLatest === false) {
            let copyProjectData = [...projectData];
            // console.log(copyProjectData, 'copyProjectData');
            let storeCopyData = copyProjectData.filter((ele) => {
                return ele.category === "html" && ele.model === "Latest"
            })
            setFilterQtyCardLatest(storeCopyData.slice(0, 7))
            console.log(filterQtyCardLatest, 'filterQtyCardLatestEight');
        }
        else {
            let copyProjectData = [...projectData];
            let storeCopyData = copyProjectData.filter((ele) => {
                return ele.category === "html" && ele.model === "Latest"
            })
            // let filterQtyCard = storeCopyData;
            setFilterQtyCardLatest(storeCopyData)
            console.log(filterQtyCardLatest, 'filterQtyCardLatestAll');
        }
    }
    // ------------------------------------------- 
    const oldestProjectFilterQty = () => {
        setBtnValOldest(!btnValOldest)
        if (btnValOldest === false) {
            let copyProjectData = [...projectData];
            // console.log(copyProjectData, 'copyProjectData');
            let storeCopyData = copyProjectData.filter((ele) => {
                return ele.category === "html" && ele.model === "old"
            })
            setFilterQtyCardOldest(storeCopyData.slice(0, 7))
            console.log(filterQtyCardOldest, 'filterQtyCardEightOldest');
        }
        else {
            let copyProjectData = [...projectData];
            let storeCopyData = copyProjectData.filter((ele) => {
                return ele.category === "html" && ele.model === "old"
            })
            // let filterQtyCard = storeCopyData;
            setFilterQtyCardOldest(storeCopyData)
            console.log(filterQtyCardOldest, 'filterQtyCardAllOldest');
        }
    }

    useEffect(() => {
        LatestProjectFilterQty();
        oldestProjectFilterQty()
    }, [])

    return (
        <>
            <div className="section html_projects">
                <div className="container">
                    <h1>Html Projects :</h1>
                    <div className="projects ">
                        <h2>Latest Project</h2>
                        <div className="group bottom_line">
                            {filterQtyCardLatest.map((ele, idx) => {
                                return ele.category === "html" && ele.model === "Latest" ? <Card id={ele.id} key={idx} hrefUrl={ele.url} imagePath={ele.image} name={ele.projectName} /> : "";
                            })}
                            <div className="card">
                                <button onClick={() => LatestProjectFilterQty()}>{btnValLatest ? 'View All' : 'Show Less'} </button>
                            </div>
                            {/* <Card hrefUrl="https://avais1021.github.io/shape-your-career-public" imagePath="why-ultra-tech.png" name="Why Ultratech" /> */}
                            {/* <Card hrefUrl="https://avais1021.github.io/Life-at-UltraTech/" imagePath="life-at-ultratech.png" name="Life At Ultratech" />
                            <Card hrefUrl="https://avais1021.github.io/Jobs-at-UltraTech/" imagePath="Jobs-at-UltraTech.png" name="Jobs At Ultratech" />
                            <Card hrefUrl="https://avais1021.github.io/Early-Career/" imagePath="Early-Career.png" name="Early Career" />
                            <Card hrefUrl="https://avais1021.github.io/Ultratech_header_responsive/#" imagePath="ultra-header.png" name="Ultratech Header" />
                            <Card hrefUrl="https://avais1021.github.io/ultratect-section-All-Responsive/" imagePath="Home-buildin-section.png" name="Ultratech Homebuilding" />
                            <Card hrefUrl="https://avais1021.github.io/Future_Generali_section/" imagePath="Future_Generali.png" name="Future Generali Section" />
                            <Card hrefUrl="https://avais1021.github.io/Weight-Loss-food/" imagePath="weight-lose.png" name="Weight Loss" />
                            <Card hrefUrl="https://avais1021.github.io/healthy-food-All-Responsive/" imagePath="healthy-food.png" name="Healthy Food" />
                            <Card hrefUrl="https://avais1021.github.io/Fifth-Task-All-responsive/" imagePath="zero-waste.png" name="Zero Waste" /> */}
                        </div>
                        <h2>Learning Time Project</h2>
                        <div className="group">
                            {filterQtyCardOldest.map((ele, idx) => {
                                return ele.category === "html" && ele.model === "old" ? <Card id={ele.id} key={idx} hrefUrl={ele.url} imagePath={ele.image} name={ele.projectName} /> : "";
                            })}
                            <div className="card">
                                <button onClick={() => oldestProjectFilterQty()}>{btnValOldest ? 'View All' : 'Show Less'}</button>
                            </div>
                            {/* <Card hrefUrl="https://avais1021.github.io/fourth-Task-All-respnsive/" imagePath="hdfc.png" name="HDFC Page" />
                            <Card hrefUrl="https://avais1021.github.io/Third-task-responsive/" imagePath="car-page.png" name="House Of Vehicles" />
                            <Card hrefUrl="https://avais1021.github.io/second--task-desktop-mobile/" imagePath="iffco-tokio.png" name="Iffko Tokio Family" />
                            <Card hrefUrl="https://avais1021.github.io/first-task-only-desktop-view/" imagePath="iffko-tokio-policy.png" name="Iffko Tokio Policy" />
                            <Card hrefUrl="https://avais1021.github.io/my-online-meal-All-Responsive/" imagePath="my-online-meal.png" name="My Online Meal" />
                            <Card hrefUrl="https://avais1021.github.io/the-food-you-love-All-Responsive/" imagePath="food-you-love.png" name="The Food You Love" />
                            <Card hrefUrl="https://avais1021.github.io/shopping-website-only-desktop-view/" imagePath="black-friday.png" name="Shopping Page" />
                            <Card hrefUrl="https://avais1021.github.io/starbuks-clone-only-desktop-View/" imagePath="starBuck.png" name="Cofee Page" />
                            <Card hrefUrl="https://avais1021.github.io/clinic-only-desktop-view/#" imagePath="appointment-page.png" name="Appointment Page" />
                            <Card hrefUrl="https://avais1021.github.io/portfolio-only-desktop-view/" imagePath="portfoli-page.png" name="Portfoli Page" /> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HtmlProjects
