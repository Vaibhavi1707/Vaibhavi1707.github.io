import React from 'react'
import "../css/About.css"

import me from "../images/me.jpg"

function About() {
    return (
        <div className = "about">
            <h2>About Me</h2>
            <div className = "matter">
                <div className = "desc">
                <p>
                    I am a third year undergraduate student pursuing Computer Science at International Institute of Information Technology, Bangalore. 
                    I am interested in design thinking and development to boost user productivity. I'm currently exploring Machine Learning.            
                </p>
                </div>
                <div>
                    <img src = {me} alt = "me" style = {{ width: "30vw", height: "30vw", borderRadius: "15vw" }}></img>
                </div>
            </div>
        </div>
    )
}

export default About
