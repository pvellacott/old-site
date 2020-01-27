import React from 'react';
import { Global, css } from '@emotion/core'



var style = {
    float: "right",
    position: "relative",
    display: "inline-block",
    top: "-110px",
    marginRight: "40px",
    fontWeight: "bold",
    fontSize: "1.4em",
    
}


export default function Navbar() {
    return (
        <div>
        <div style={ style }>
            <p>About</p>
        </div>
        <div style={ style }>
            <p>Projects</p>
        </div>
        </div>
    );
 }