import React from 'react';
import Aux from '../../hoc/Aux';
import { Global, css } from '@emotion/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faSpotify } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './Layouts.css';
import ImageAvatar from '../Picture';
import Navbar from '../Navbar';
import SimpleExpansionPanel from '../Contact'
import Footer from '../Footer';
import Wave from 'react-wavify';
import Header from '../Header';


const spaces = {
    marginRight: '10px',
    color: '#e9e9e9',
}

const iconB = {
    color: '#e9e9e9',
}

const WEB_URL = "https://github.com/pvellacott";
const SPOT_URL = "https://open.spotify.com/user/12174613455"
const TWIT_URL = "mailto:vellacott.phil@gmail.com"

const Layout = ( props ) => (    
<Aux>
    <Router>
    <div className="container">
        <main>
             <Navbar></Navbar>
                 <h1 css={css` font-size: 2.1em; margin-top: 250px; `}>Hi,</h1>
                 <Header />
                 <h4>Front-end developer. Montreal Quebec.</h4>
                 <div className="iconz">
        
                        <a href={WEB_URL}><FontAwesomeIcon icon={ faGithub } size="md" style={ spaces } /></a>
                        <a href={SPOT_URL}><FontAwesomeIcon icon={ faSpotify } size="md" style={ spaces } /></a>
                        <a href={TWIT_URL}><FontAwesomeIcon icon={ faEnvelope } size="md" style={ iconB } /></a>
                  </div>
        </main>
    </div>
    </Router>
    <Footer></Footer>
</Aux>
);

export default Layout;