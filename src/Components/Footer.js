import React from 'react';
import { Global, css } from '@emotion/core'
import './Layouts/Layouts.css';
import { faAutoprefixer } from '@fortawesome/free-brands-svg-icons';
import Wave from 'react-wavify'


const style = css`
  position: absolute;
  left: 0; 
  bottom: 0;
  width: 100%;
  height: 170px;
`


export default function Footer() {
    return (
        <footer css={ style }>
          <div>
            <p>Phil Vellacott 2020 | Buit with, a Computer.</p>
          </div>
          <Wave fill='#ff4c4c'
            options={{
              height: 10,
              amplitude: 20,
              speed: 0.15,
              points: 3,
            }}
          />
        </footer>
    );
 }