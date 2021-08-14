import React from 'react'
import Card from '../components/Card'
import "../css/Projects.css"

import rubaroo from "../images/rubaroo.png"
import rgb2grey from "../images/rgb2grey.jpeg"
import routing from "../images/routing.jpeg"
import cubesum from "../images/3cubesum.jpeg"

function Projects() {
    return (
        <div className = "projects">
            <h2>Projects</h2>
            <div className = "projects__cards">
                <Card textColor = "#0A192F" cardColor = "#45B09F" imgSrc = {rubaroo} title = "Rubaroo" description = "HackOn"/>
                <Card textColor = "#0A192F" cardColor = "#45B09F" imgSrc = {rgb2grey} title = "PPM Color to Greyscale" description = "C++ Course project"/>
                <Card textColor = "#0A192F" cardColor = "#45B09F" imgSrc = {routing} title = "Transport Routing System" description = "Java course project"/>
                <Card textColor = "#0A192F" cardColor = "#45B09F" imgSrc = {cubesum} title = "Three Cube Sum" description = "paper replication"/>
            </div>            
        </div>
    )
}

export default Projects
