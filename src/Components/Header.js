import React, { Component } from "react"
import ReactTooltip from 'react-tooltip'
import { Global, css } from '@emotion/core'
import ImageAvatar from './Picture'


export default function Header() {
    return (
        <div>
             <h1 css={css` font-size: 3.1em; width: 200px; `} data-tip data-for="Tooltip">I'm <span css={css` color: #ffa458; `}>Phil</span>.</h1>
             <ReactTooltip place="bottom" id="Tooltip">
                 <ImageAvatar></ImageAvatar>
             </ReactTooltip>
        </div>
    )
 }