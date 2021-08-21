import React from 'react'
import "../css/Email.css"
import { Link, BrowserRouter as Router } from 'react-router-dom'

function Email() {
    const myEmail = "vaibhavilokegaonkar@gmail.com";
    return (
        <div className = "email" >
        <Router basename = {process.env.PUBLIC_URL}>
            <Link
            to='#'
            onClick={(e) => {
                window.location = `mailto:${myEmail}`;
                e.preventDefault();
            }}
            >{myEmail}</Link>
            {/* <a href = {`mailto(${myEmail})`}></a> */}
            </Router>
        </div>
    )
}

export default Email
