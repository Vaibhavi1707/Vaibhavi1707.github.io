import React from 'react'
import "../css/Contact.css"

function Contact() {
    return (
        <div className = "contact">
            <h2>Let's chat</h2>
            <p>Over coffee or projects :)</p>
            <iframe title = "contactForm" src="https://docs.google.com/forms/d/e/1FAIpQLScw80tC9lNX1sbVF0y_IwxukmkO5SKcBLcEFmD9O__NtFlrMQ/viewform?embedded=true" width="640" height="725" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
    )
}

export default Contact
