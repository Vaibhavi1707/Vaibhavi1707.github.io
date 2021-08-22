import React from 'react'
import MyCard from '../components/MyCard'
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
                <a href = "https://github.com/mansi35/Rubaroo" ><MyCard textcolor = "#0A192F" cardcolor = "#45B09F" imgsrc = {rubaroo} title = "Rubaroo" /></a>
                <a href = "https://gitlab.com/VaibCoder_7/CppProject-FileReader"><MyCard textcolor = "#0A192F" cardcolor = "#45B09F" imgsrc = {rgb2grey} title = "PPM Color to Greyscale"/></a>
                <a href = "https://gitlab.com/VaibCoder_7/java_assignment6" ><MyCard textcolor = "#0A192F" cardcolor = "#45B09F" imgsrc = {routing} title = "Transport Routing System" /></a>
                <a href = "https://gitlab.com/VaibCoder_7/three_cube_sum" ><MyCard textcolor = "#0A192F" cardcolor = "#45B09F" imgsrc = {cubesum} title = "Three Cube Sum" /></a>
            </div>            
        </div>
    )
}

export default Projects
