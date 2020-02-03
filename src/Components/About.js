import React from 'react';
import { Global, css } from '@emotion/core'
import Typed from 'react-typed';

export default function AboutMe() {
    return (
        <div css={css` 
            display: inline-block; 
            position: relative; 
            width: 100% ;
            margin-top: 300px;
            font-size: 2em;
            
            `}>

             <p css={css` margin-left: 40px; margin-right: 5px; float:left; `}>nice to meet you, want to </p>
                <Typed
                    strings={['^1000 learn a little more about me? ^1000', '^1000 know what Im intersted in? ^1000', '^1000 get my adress so we can meet up and have me obliterate you in Super Smash Bros. Melee? ^1000', '^1000 chat?' ]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                />
        </div>
    )
 }