import React from 'react';
import Aux from '../../hoc/Aux';
import ImageAvatar from '../Picture';
import './Layouts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const bodyStyle = {
    
        backgroundImage: 'linear-gradient( to right, #141e30, #243b55,)',
    
  };

const Layout = ( props ) => (    
<Aux>
    <body style={bodyStyle}>
        <div>Navbar, Stuff, Backdrop</div>
        <main>
             {props.children}
             <ImageAvatar></ImageAvatar>
             <h1>Hi, I'm Phil.</h1>
           
        </main>
    </body>
</Aux>
    
);

export default Layout;