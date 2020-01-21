import React from 'react';
import Aux from '../../hoc/Aux';
import ImageAvatar from '../Picture';
import './Layouts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faSpotify, faTwitter } from '@fortawesome/free-brands-svg-icons';

const spaces = {
    marginRight: '10px',
    color: 'black',
}

const iconB = {
    color: 'black',
}


const WEB_URL = "https://github.com/pvellacott";
const SPOT_URL = "https://open.spotify.com/user/12174613455"
const TWIT_URL = "https://twitter.com/phil_vellacott"

const Layout = ( props ) => (    
<Aux>

        <main>
             {props.children}
                <ImageAvatar></ImageAvatar>
                <center>
                    <div className="iconz">
                            <a href={WEB_URL}><FontAwesomeIcon icon={ faGithub } size="lg" style={ spaces } /></a>
                            <a href={SPOT_URL}><FontAwesomeIcon icon={ faSpotify } size="lg" style={ spaces } /></a>
                            <a href={TWIT_URL}><FontAwesomeIcon icon={ faTwitter } size="lg" style={ iconB } /></a>
                    </div>
                </center>
             <center>
                 <h1>Hi, I'm Phil.</h1>
             </center>
           
        </main>
</Aux>
    
);

export default Layout;