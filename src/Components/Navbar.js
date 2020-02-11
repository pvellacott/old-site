import React from 'react';
import { Global, css } from '@emotion/core'


var bruh = {

    display: "flex",
    marginRight: "40px",
    fontWeight: "bold",
    fontSize: "1.4em",
    overFlow: "none",
    justifyContent: "flex-end",
    marginTop: "70px",
  

}

const style = theme => css`
  padding: 20px;
  text-decoration: none;
  display: inline-block;
  font-weight: 700;
  color: #e9e9e9;
  background: none;
  &:after {
    display: block;
    content: '';
    border-bottom: solid 3px currentColor;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
    transform-origin: 100% 50%;
    color: #ffa458;
  }
  &:hover:after {
    transform: scaleX(1);
    transform-origin: 0 50%;
  }
  &[disabled], &:disabled {
    cursor: default;
  }
  &:visited {
    color: #e9e9e9;
  }
  border: none;
  cursor: pointer;


`


export default function Navbar() {
    return (
      <nav>
        <div style={ bruh }>
        <div >
          <a css={css` padding: 15px; `} css={ style } href="https://github.com/pvellacott">Projects</a>
        </div>
        <div>
          <a css={css` padding: 15px; `} css={ style } href='/about'>About</a>
        </div>
        </div>
      </nav>
    );
 }