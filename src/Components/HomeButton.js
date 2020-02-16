import React, { Component } from "react"
import { Global, css } from '@emotion/core'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const style = theme => css`

border: solid #4495d0 3px;
border-radius: 8px;
display: inline-block;
font-size: 15px;
color: #4495d0;
padding: 5px 10px;
background: white;
font-weight: bold;

`

export default function HomeButton() {
    return (
        <div css={ style }>
            <faChevronLeft /><a>Home</a>
        </div>
    )
 }