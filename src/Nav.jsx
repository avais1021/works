import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

const Nav = () => {
    const [modeVal , setModeVal] = useState(false)
    const modeChange = () => {
        setModeVal(!modeVal)
        document.body.classList.toggle('modeChange')
    }

    return (
        <div className="section nav">
            <div className="container">
                <div className="row">
                    <div className="logo">
                        <h2>Owes Ansari</h2>
                    </div>
                    <ul>
                        <NavLink to='/'><li>Home</li></NavLink>
                        <NavLink to='/react'><li>React</li></NavLink>
                        <NavLink to='/html'><li>Html</li></NavLink>
                        <NavLink to='/javascript'>Javascript<li></li></NavLink>
                        <li onClick={modeChange}> {modeVal ? <MdDarkMode/> : <CiLight /> }</li>
                        {/* <MdDarkMode className='dark'/> */}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Nav
