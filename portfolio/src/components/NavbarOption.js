import React from 'react'
import "../css/NavbarOption.css"

function NavbarOption({ title }) {
    return (
        <div className = "option">
            <h4>{ title }</h4>
        </div>
    )
}

export default NavbarOption
