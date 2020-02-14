import React from 'react';
import { Global, css } from '@emotion/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faSpotify } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './Layouts.css';
import Navbar from '../Navbar';
import SimpleExpansionPanel from '../Contact'
import Footer from '../Footer';
import Wave from 'react-wavify';
import Header from '../Header';
import photo from '../Images/paris.jpg';


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
  <div className="container">
   <Navbar />
    <main>
      { props.children }
    </main>
    <Footer />
  </div>
) 

const Routing = ( props ) => (    
    <Router>
        <Switch>
            <Route path="/about">
              <Layout>
                <About />
              </Layout>
            </Route>
            <Route path="/">
              <Layout>
                <Home />
              </Layout>
            </Route>
        </Switch>
    </Router>
);

const Home = () => 
  <div>
    <h1  css={css` font-size: 2.1em; margin-top: 120px; `}>Hi,</h1>
    <Header />
    <h4>Front-end developer. Montreal Quebec.</h4>
    <div className="iconz">
      <a href={WEB_URL}><FontAwesomeIcon icon={ faGithub } size="md" style={ spaces } /></a>
      <a href={SPOT_URL}><FontAwesomeIcon icon={ faSpotify } size="md" style={ spaces } /></a>
      <a href={TWIT_URL}><FontAwesomeIcon icon={ faEnvelope } size="md" style={ iconB } /></a>
    </div>
  </div>
  


 const About = () =>
    <div css={css`margin-top: 30px;`}>
      <center>
        <img css={css` width: 240px; height: 320px; border-radius: 10px `} src={photo} />
        <p css={css`margin-top: 30px;`}><span css={css`font-size: 11px;`}>*Shakes your hand <span css={css`font-style: italic;`}>very</span> firmly*</span> My name is <span css={css`color: #ffa458; ;`}> Phil Vellacott</span> & I'm a Front-end Web developer based in Montreal, QB.</p>
        <p css={css`margin-top: 30px;`}>Spending most of my time doing frontend web design.</p>
        <p css={css`margin-top: 30px;`}>Love for all Web Technologies & learning new things to build better newer things.</p>
        <p css={css`margin-top: 30px;`}>Checkout my latest projects on <a css={css`color: #ffa458; border: none;text-decoration: none; cursor: pointer; &:visited {color:#ffa458;}`} href='https://github.com/pvellacott'>Github</a> or if you'd like to get in contact with me reach me by <a css={css`color: #ffa458; border: none;text-decoration: none; cursor: pointer; &:visited {color: #ffa458;}`} href='mailto:vellacott.phil@gmail.com'>Email</a>.</p>
      </center>
      
    </div>

const Projects = () =>
<div css={css`margin-top: 30px;`}>
  
</div>
  



export default Routing;