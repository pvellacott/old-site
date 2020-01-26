import React from 'react';
import Aux from '../../hoc/Aux';
import ImageAvatar from '../Picture';
import './Layouts.css';
import { Global, css } from '@emotion/core'


import SimpleExpansionPanel from '../Contact'

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

                 <h1 css={css` font-size: 1.8em; margin-top: 60px; `}>Hi,</h1>
                 <h1 css={css` font-size: 2.8em; `}> I'm Phil.</h1>
                 <h4>Front-end developer. Montreal, Quebec.</h4>
                
             
        </main>
        <footer> </footer>   
    </div>
</Aux>
    
);

export default Layout;