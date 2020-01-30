import React from 'react';
import { Global, css } from '@emotion/core'



var style = {
    float: "right",
    position: "relative",
    display: "inline-block",
    top: "-120px",
    marginRight: "40px",
    fontWeight: "bold",
    fontSize: "1.4em",
    overFlow: "none"
    
}


export default function Navbar() {
    return (
        <div>
        <div css={css`  
            
            a:hover:before {
              width: 100%;
              background: #75ebb6;
              transition: width 0.5s ease;
            }
            a:hover:after {
               width: 100%;
               background: transparent;
               transition: all 0s ease;
             }
            a:before {
              content: "";
              display: block;
              position: absolute;
              left: 0;
              bottom: 0;
              height: 3px;
              width: 0;
              transition: width 0s ease, background 0.5s ease;
            }
            a:after {
              content: "";
              display: block;
              position: absolute;
              right: 0;
              bottom: 0;
              height: 3px;
              width: 0;
              background: #75ebb6;
              transition: width 0.5s ease;
            }
           `} style={ style }>
            <a>
          About</a>
        </div>
        <div css={css`  
            
            a:hover:before {
              width: 100%;
              background: #75ebb6;
              transition: width 0.5s ease;
              z-index: -1;
            }
            a:hover:after {
               width: 100%;
               background: transparent;
               transition: all 0s ease;
               z-index: -1;
             }
            a:before {
              content: "";
              display: block;
              position: absolute;
              left: 0;
              bottom: 0;
              height: 3px;
              width: 0;
              transition: width 0s ease, background 0.5s ease;
              z-index: -1;
            }
            a:after {
              content: "";
              display: block;
              position: absolute;
              right: 0;
              bottom: 0;
              height: 3px;
              width: 0;
              background: #75ebb6;
              transition: width 0.5s ease;
              z-index: -1;
            }
           `} style={ style }>
            <a>Projects</a>
        </div>
        </div>
    );
 }