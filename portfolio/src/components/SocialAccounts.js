import React from 'react'
import { GitHub } from '@material-ui/icons';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function SocialAccounts() {
    return (
        <div className = "socialAccounts">
            <GitHub />
            <LinkedInIcon />
            <InstagramIcon />
            <FacebookIcon />
            <div className = "vertical"></div>
        </div>
    )
}

export default SocialAccounts;
