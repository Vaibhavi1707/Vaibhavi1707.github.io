import React from 'react'
import MyCard from '../components/MyCard'
import "../css/Projects.css"

import rubaroo from "../images/rubaroo.png"
import rgb2grey from "../images/rgb2grey.jpeg"
// import routing from "../images/routing.jpeg"
import cubesum from "../images/3cubesum.jpeg"

function Projects() {
    return (
        <div className = "projects">
            <h2>Projects</h2>
            <div className = "projects__cards">
                <MyCard textcolor = "#0A192F" cardcolor = "#45B09F" imgsrc = {rubaroo} title = "Rubaroo" description = "HackOn"/>
                <MyCard textcolor = "#0A192F" cardcolor = "#45B09F" imgsrc = {rgb2grey} title = "PPM Color to Greyscale" description = "C++ Course project"/>
                {/* <MyCard textcolor = "#0A192F" cardcolor = "#45B09F" imgsrc = {routing} title = "Transport Routing System" description = "Java course project"/> */}
                <MyCard textcolor = "#0A192F" cardcolor = "#45B09F" imgsrc = {cubesum} title = "Three Cube Sum" description = "paper replication"/>
            </div>            
        </div>
    )
}

export default Projects
