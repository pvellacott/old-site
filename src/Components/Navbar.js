import React from 'react';
import { Global, css } from '@emotion/core'



var style = {
    float: "right",
    position: "relative"
}


export default function Navbar() {
    return (
        <div style={ style }>
            <p>Projects</p>
            <p>About</p>
        </div>
    );
 }