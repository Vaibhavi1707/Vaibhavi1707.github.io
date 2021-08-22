import React from 'react'
import "../css/Skills.css"

import cpp from "../images/cpp.svg"
import py from "../images/py.svg"
import java from "../images/java.svg"
import js from "../images/js.svg"
import reactjs from "../images/reactjs.svg"
import springboot from "../images/springboot.svg"
// import pandas from "../images/pandas.png"
// import plt from "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg"
import tf from "../images/tf.svg"
import mysql from "../images/mysql.svg"
import mongo from "../images/mongo.svg"


function Skills() {
    return (
        <div className = "skills">
            <h2>Skills</h2>
            <h3>Languages</h3>
            <img src = {cpp} alt = "cpp" width = "70vw" height= "70vw" style = {{ marginRight: "20px", color: "#63F4DA" }} />
            <img src = {py} alt = "py" width = "70vw" height= "70vw" style = {{ marginRight: "20px" , color: "#63F4DA" }} />
            <img src = {java} alt = "java" width = "70vw" height= "70vw" style = {{ marginRight: "20px" }} />
            <img src = {js} alt = "js" width = "70vw" height= "70vw" style = {{ marginRight: "20px" }} />
            <h3>Frameworks</h3>
            <img src = {reactjs} alt = "reactjs" width = "70vw" height= "70vw" style = {{ marginRight: "20px", color: "#63F4DA" }} />
            <img src = {springboot} alt = "springboot" width = "70vw" height= "70vw" style = {{ marginRight: "20px" , color: "#63F4DA" }} />
            {/* <img src = {pandas} alt = "pandas" width = "200vw" height= "50vw" style = {{ marginRight: "20px" }} /> */}
            <img src = "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg" alt = "plt" width = "70vw" height= "70vw" style = {{ marginRight: "20px" }} />
            <img src = {tf} alt = "tf" width = "70vw" height= "70vw" style = {{ marginRight: "20px" }} />
            
            <h3>Databases</h3>
            <img src = {mongo} alt = "mongo" width = "70vw" height= "70vw" style = {{ marginRight: "20px", color: "#63F4DA" }} />
            <img src = {mysql} alt = "mysql" width = "70vw" height= "70vw" style = {{ marginRight: "20px" , color: "#63F4DA" }} />
        </div>
    )
}

export default Skills
