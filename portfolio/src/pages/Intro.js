import React from 'react'
import "../css/Intro.css"
import Navbar from '../components/Navbar'
import Typical from 'react-typical'

function Intro() {
    return (
        <div className = "intro">
            <div className = "first__intro">
                <div className = "greeting">
                    Hi, I'm
                </div>
                <div className = "myName">
                    Vaibhavi Lokegaonkar.
                </div>
                <div className = "whoami">
                    I am a <Typical loop = {Infinity} wrapper = "b" steps = {['CSE Undergrad', 1000, 'Web Developer', 1000, 'ML Enthusiast', 1000]}/>
                </div>
            </div>
        </div>
    )
}

export default Intro
