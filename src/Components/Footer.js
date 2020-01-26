import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faSpotify, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Global, css } from '@emotion/core'
import './Layouts.css';


var style = {
    bottom: "0",
    position: "fixed",
    justifyContent: "center"
}


const WEB_URL = "https://github.com/pvellacott";
const SPOT_URL = "https://open.spotify.com/user/12174613455"
const TWIT_URL = "https://twitter.com/phil_vellacott"


export default function Footer() {
    return (
<div>
    <div style={ style } className="iconz">
        <a href={WEB_URL}><FontAwesomeIcon icon={ faGithub } size="lg" style={ spaces } /></a>
        <a href={SPOT_URL}><FontAwesomeIcon icon={ faSpotify } size="lg" style={ spaces } /></a>
        <a href={TWIT_URL}><FontAwesomeIcon icon={ faTwitter } size="lg" style={ iconB } /></a>
    </div>
      
            <p style={ style }>© 2019 Phil Vellacott</p>
</div>
    );
 }