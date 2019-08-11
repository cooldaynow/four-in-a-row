import React from 'react';
import './index.scss';

const Ball = ({player}) => (
  <div className={player ? 'ball red' : 'ball green'}>{player ? 'x' : 'y'}</div>
);

export default Ball;
