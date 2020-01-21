import React from 'react';
import Aux from '../../hoc/Aux';
import ImageAvatar from '../Picture';
import './Layouts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Layout = ( props ) => (    
<Aux>
     <div>
     <FontAwesomeIcon icon="coffee" />
     </div>
        <main>
             {props.children}
             <ImageAvatar></ImageAvatar>
             <center>
             <h1>Hi, I'm Phil.</h1>
             </center>
           
        </main>
</Aux>
    
);

export default Layout;