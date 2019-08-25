import React from 'react';
import './index.scss';

const Ball = ({gameOver, win, color, player}) => (
  <div
    className={
      gameOver && win
        ? 'ball win'
        : color === player
        ? 'ball black'
        : 'ball white'
    }>
    {player ? '1' : '2'}
  </div>
);

export default Ball;
