import React from 'react';
import { Global, css } from '@emotion/core'


const bruh = css`
    display: flex;
    margin-right: 40px;
    font-weight: bold;
    font-size: 1.4em;
    overflow: none;
`
const filler = css`
  width: 100%;
`

const flexbox = css`
  display: flex;
`


const margin = css`
  margin-top: 70px;
`

const style = css`
  a { 
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
  }
`


export default function Navbar( props ) {
  const { children, ...rest } = props
  return (
    <nav css={ margin }>
      <div css={ bruh }>
        <div css={ filler }>{ children }</div>
        <div css= { flexbox }>
          <div css={ style }>
            <a href="https://github.com/pvellacott">Projects</a>
          </div>
          <div css={ style }>
            <a href='/about'>About</a>
          </div>
        </div>
      </div>
    </nav>
  );
}