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
  overflow: hidden;
  > div:nth-of-type(2){
    margin-top: 80px;
  }
`
const text = css`
  z-index: 1;
  bottom: 23px;
  position: absolute;
  font-weight: 700;
  color: #e9e9e9;;
`

const center = css`
  display: flex;
  justify-content: center;
`


export default function Footer() {
    return (
    
        <footer css={ style }>
          <div css={ center }>
            <div css={ text }>
              <p>Phil Vellacott 2020 | Built with 🖥️ Computer.</p>
            </div>
          </div>
          <Wave fill='#333333'
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