import React from 'react';
import { Global, css } from '@emotion/core'
import './Layouts/Layouts.css';



var copy = {
    float: "right",
    right: "26%",
    display: "inline-block",
    bottom: "40px",
    position: "absolute",
    fontSize: "10px",
    
}


export default function Footer() {
    return (
        <div>
            <p style={ copy }>© 2019 Phil Vellacott</p>
        </div>
    );
 }