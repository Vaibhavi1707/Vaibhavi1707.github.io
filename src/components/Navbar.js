import React, { useState } from 'react'
import { Link, BrowserRouter } from 'react-router-dom';
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
                <BrowserRouter>
                <Link to = "/">Home</Link>
                <Link to = "/about">About</Link>
                <Link to = "/skills">Skills</Link>
                <Link to = "/achievements">Achievements</Link>
                <Link to = "/experience">Experience</Link>
                <Link to = "/projects">Projects</Link>
                <Link to = "/contact">Contact</Link>
                </BrowserRouter>
                </div>
                <MenuIcon onClick = {() => setShowLinks(!showLinks)} style = {{ color: "#ffffff" }}/>
            </div>
        </div>
    )
}

export default Navbar;
