import React from 'react'
import MyCard from '../components/MyCard'
import "../css/Achievements.css"

import suse from "../images/suse.png"
import we from "../images/we.png"

function Achievements() {

    return (
        <div className = "achievements">
            <h2>Achievements</h2>
            <div className = "achievements__cards">
                <MyCard cardcolor = "#0A192F" textcolor = "#8892B0" imgsrc = {suse} title = "Udacity SUSE Cloud Native Architecture Nanodegree Scholar" description = "Udacity suse scholar" />
                <MyCard cardcolor = "#0A192F" textcolor = "#8892B0" imgsrc = {we} title = "Women Engineers Scholar at Google" description = "2-year experiential program" />
            </div>
        </div>
    )
}

export default Achievements
