import React from 'react'
import Card from '../components/Card'
import "../css/Achievements.css"

import suse from "../images/suse.png"
import we from "../images/we.png"

function Achievements() {

    return (
        <div className = "achievements">
            <h2>Achievements</h2>
            <div className = "achievements__cards">
                <Card textColor = "#0A192F" cardColor = "#CCD6F6" imgSrc = {suse} title = "Udacity SUSE Cloud Native Architecture Nanodegree Scholar" description = "Udacity suse scholar" />
                <Card textColor = "#0A192F" cardColor = "#CCD6F6" imgSrc = {we} title = "Women Engineers Scholar at Google" description = "2-year experiential program" />
            </div>
        </div>
    )
}

export default Achievements
