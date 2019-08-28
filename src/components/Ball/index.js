import React from 'react';
import './index.scss';

const Ball = ({isGameOver, win, colorNumber, playerNumber}) => (
  <div
    className={
      isGameOver && win
        ? 'ball win'
        : colorNumber === playerNumber
        ? 'ball black'
        : 'ball white'
    }>
    {playerNumber}
  </div>
);

export default Ball;
