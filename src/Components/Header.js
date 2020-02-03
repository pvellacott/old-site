import React, { Component } from "react"
import ReactTooltip from 'react-tooltip'
import { Global, css } from '@emotion/core'
import Image from './Images/mustashe.jpg'


export default function Header() {
    return (
        <div>
             <h1 css={css` font-size: 3.1em; width: 200px `} data-tip data-for="Tooltip">I'm Phil.</h1>
             <ReactTooltip place="right" id="Tooltip">
                 <h1>test</h1>
             </ReactTooltip>
        </div>
    )
 }