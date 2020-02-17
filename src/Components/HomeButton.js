import React, { Component } from "react";
import { css } from '@emotion/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const style = css`

font-size: 1.3em;
color: #e9e9e9;
font-weight: bold;
padding: 20px;

`

export default function HomeButton() {
    return (
        <div css={ style }>
            <FontAwesomeIcon icon={ faChevronLeft } size="sm" /><a href='/'> Back</a>
        </div>
    )
 }