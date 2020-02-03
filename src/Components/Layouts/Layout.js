import React from 'react';
import Aux from '../../hoc/Aux';
import { Global, css } from '@emotion/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faSpotify, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Layouts.css';
import ImageAvatar from '../Picture';
import Navbar from '../Navbar';
import SimpleExpansionPanel from '../Contact'
import Footer from '../Footer';
import Wave from 'react-wavify';
import Header from '../Header';

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
    <div className="container">
        <main>
             {props.children}
             <Navbar></Navbar>
                 <h1 css={css` font-size: 2.1em; margin-top: 250px; `}>Hi,</h1>
                 <Header></Header>
                 <h4>Front-end developer. Montreal Quebec.</h4>
                 <div className="iconz">
        
                        <a href={WEB_URL}><FontAwesomeIcon icon={ faGithub } size="md" style={ spaces } /></a>
                        <a href={SPOT_URL}><FontAwesomeIcon icon={ faSpotify } size="md" style={ spaces } /></a>
                        <a href={TWIT_URL}><FontAwesomeIcon icon={ faTwitter } size="md" style={ iconB } /></a>
                  </div>
               
                <br></br>
                {/*<center>
                <p css={css` font-size: 1.2em; margin-top: 200px;`}>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - </p>
                </center>*/}
                <center>
                    <h2 css={css`margin-top: 250px; `}><span css={css` color: #75ebb6; `}>~</span> About <span css={css` color: #75ebb6; `}>~</span></h2>
                </center>
        </main>
       
        
        
    </div>
    <Footer></Footer>
</Aux>
    
);

export default Layout;