import React from 'react';
import './index.scss';

const Ball = ({player, color}) => (
  <div className={color === player ? 'ball red' : 'ball blue'}>{player ? 'x' : 'y'}</div>
);

export default Ball;
