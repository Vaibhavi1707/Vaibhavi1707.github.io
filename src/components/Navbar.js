import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import "../css/Navbar.css"
// import NavbarOption from './NavbarOption'
import MenuIcon from '@material-ui/icons/Menu';

function Navbar() {
    const [showLinks, setShowLinks] = useState(false);

    return (
        <div className = "navbar">
            <div className = "left">
             <div className = "me"><h1>VL</h1></div>
            </div>
            <div className = "right">
                <div className = "links" id = {showLinks ? "hidden" : ""}>
                <BrowserRouter basename = {process.env.PUBLIC_URL}>
                <a href = "/">Home</a>
                <a href = "/about">About</a>
                <a href = "/skills">Skills</a>
                <a href = "/achievements">Achievements</a>
                <a href = "/experience">Experience</a>
                <a href = "/projects">Projects</a>
                <a href = "/contact">Contact</a>
                </BrowserRouter>
                </div>
                <MenuIcon onClick = {() => setShowLinks(!showLinks)} style = {{ color: "#ffffff" }}/>
            </div>
        </div>
    )
}

export default Navbar;
