import React from 'react';
import './index.scss';
import Ball from '../Ball';

const BoardHeader = ({color, player}) => (
  <div className="board__header">
    <h1> Player turn </h1>
    <div className="board__ball">
      <Ball color={color} player={player} />
    </div>
  </div>
);

export default BoardHeader;
