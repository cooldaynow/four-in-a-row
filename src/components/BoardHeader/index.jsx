import React from 'react';
import Ball from '../Ball';
import './index.scss';

const BoardHeader = ({colorNumber, playerNumber}) => (
  <div className="board__header">
    <h1> Player turn </h1>
    <div className="board__ball">
      <Ball colorNumber={colorNumber} playerNumber={playerNumber} />
    </div>
  </div>
);

export default BoardHeader;
