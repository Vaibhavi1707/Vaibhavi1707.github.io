import React from 'react'
import { HashRouter } from 'react-router-dom';
import { GitHub } from '@material-ui/icons';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import "../css/SocialAccounts.css"

function SocialAccounts() {
    return (
        <div className = "socialAccounts">
            <HashRouter>
                <GitHub onClick = {() => {window.location.href = "https://github.com/Vaibhavi1707"}}/>
                <LinkedInIcon onClick = {() => {window.location.href = "https://www.linkedin.com/in/vaibhavi-lokegaonkar/"}} />
                <InstagramIcon onClick = {() => {window.location.href = "https://www.instagram.com/vaibhavi_1707/"}}/>
                <FacebookIcon onClick = {() => {window.location.href = "https://www.facebook.com/vaibhavi.lokegaonkar.14/"}}/>
            </HashRouter>
            <div className = "vertical"></div>
        </div>
    )
}

export default SocialAccounts;
