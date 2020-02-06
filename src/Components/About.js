import React from 'react';
import { Global, css } from '@emotion/core'
import Typed from 'react-typed';

export default function AboutMe() {
    return (
        <div css={css` 
            display: inline-block; 
            position: relative; 
            width: 100% ; 
            font-size: 1.8em;       
            color: #e9e9e9;
            font-family: consolas;
            `}>

             <p css={css` margin-left: 40px; margin-right: 10px; float:left; `}>Nice to meet you. Want to </p>
                <Typed
                    strings={['^1000 know more about me? ^1000', '^1000 see what Im intersted in? ^1000', '^1000 get my adress so we can meet up and have me obliterate you in Super Smash Bros. Melee? ^1000', '^1000 chat? ^1000' ]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                />
        </div>
    )
 }