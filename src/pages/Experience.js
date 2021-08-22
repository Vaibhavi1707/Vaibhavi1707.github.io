import React from 'react'
import "../css/Experience.css"

import ehrc from "../images/ehrc.png";
import spAware from "../images/spAware.jpeg";
// import adv from "../images/adv.jpeg";
import sq1 from "../images/sq1.jpeg";
import istem from "../images/istem.jpeg";

import MyCard from "../components/MyCard";

// import { Cards } from 'react-responsive-cards';


function Experience() {
    // const ehrcDetails = [{
    //     title: "Backend Developer, E-HRC",
    //     description: "NP Lab Dashboard",
    //     // image: ehrc,
    //     // handleOnClick: () => 
    // }]

    // const spAwareDetails = [{
    //     title: "UI/UX Intern",
    //     description: "Spiritual Awareness",
    //     // image: spAware,
    //     // handleOnClick: () => 
    // }]

    return (
        <div className = "experience">
            <h2>Experience</h2>
            <div className = "experience__cards">
            {/* <h3>Internships</h3> */}
            <MyCard textcolor = "#0A192F" cardcolor = "#45B09F" imgsrc = {ehrc} title = "Backend Developer, E-HRC"  />
            <MyCard textcolor = "#0A192F" cardcolor = "#45B09F" imgsrc = {spAware} title = "UI/UX Intern"  />
               
            {/* <h3>Volunteering</h3> */}
            {/* <MyCard textcolor = "#0A192F" cardcolor = "#45B09F" imgsrc = {adv} title = "Student Advocate" description="SUSE Challenge" /> */}
            <MyCard textcolor = "#0A192F" cardcolor = "#45B09F" imgsrc = {sq1} title = "Core Member" />
            <MyCard textcolor = "#0A192F" cardcolor = "#45B09F" imgsrc = {istem} title = "Volunteer" />
            
            </div>
            
        </div>
    )
}

export default Experience
