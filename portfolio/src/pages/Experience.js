import React from 'react'
import "../css/Experience.css"

import ehrc from "../images/ehrc.png";
import spAware from "../images/spAware.jpeg";
import adv from "../images/adv.jpeg";
import sq1 from "../images/sq1.jpeg";
import istem from "../images/istem.jpeg";

import Card from "../components/Card";


function Experience() {
    return (
        <div className = "experience">
            <h2>Experience</h2>
            <div className = "experience__cards">
            {/* <h3>Internships</h3> */}
                <Card imgSrc = {ehrc} title = "Backend Developer, E-HRC" description="NP Lab Dashboard" />
                <Card imgSrc = {spAware} title = "UI/UX Intern" description="Spiritual Awareness" />
            {/* <h3>Volunteering</h3> */}
                <Card imgSrc = {adv} title = "Student Advocate" description="SUSE Challenge" />
                <Card imgSrc = {sq1} title = "Core Member" description = "Induction"/>
                <Card imgSrc = {istem} title = "Volunteer" description = "IStem Hackathon"/>
            </div>
        </div>
    )
}

export default Experience
