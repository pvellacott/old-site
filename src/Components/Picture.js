import React from 'react';
import photo from './Images/paris.jpg';
import { css } from '@emotion/core'



export default function ImageAvatar() {
  return (
    <div>
      <img css={css` width: 300px; height: 400px `} src={photo} />
    </div>
  );
}