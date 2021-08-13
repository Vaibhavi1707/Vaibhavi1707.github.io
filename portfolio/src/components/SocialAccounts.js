import React from 'react'
import { Link, BrowserRouter } from 'react-router-dom';
import { GitHub } from '@material-ui/icons';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import "../css/SocialAccounts.css"

function SocialAccounts() {
    return (
        <div className = "socialAccounts">
            <BrowserRouter>
                {/* <Link to = "#"> */}
                    <GitHub />
                {/* </Link> */}
                {/* <Link to = "#"> */}
                    <LinkedInIcon />
                {/* </Link> */}
                {/* <Link to = "#"> */}
                    <InstagramIcon />
                {/* </Link> */}
                {/* <Link to = "#"> */}
                    <FacebookIcon />
                {/* </Link> */}
            </BrowserRouter>
            <div className = "vertical"></div>
        </div>
    )
}

export default SocialAccounts;
