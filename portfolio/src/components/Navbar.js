import React from 'react'
import "../css/Navbar.css"
import NavbarOption from './NavbarOption'

function Navbar() {
    return (
        <div className = "navbar">
            <NavbarOption title = "Home"/>
            <NavbarOption  title = "About"/>
            <NavbarOption  title = "Achievements"/>
            <NavbarOption  title = "Experience" />
            <NavbarOption  title = "Skills" />
            <NavbarOption  title = "Projects" />
            <NavbarOption  title = "Contact"/>
        </div>
    )
}

export default Navbar
