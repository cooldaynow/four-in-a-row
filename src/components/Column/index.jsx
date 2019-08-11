import React from 'react';
import './index.scss';
import Ball from '../../components/Ball';

const Column = ({column, addBall, id}) => {
  let handleClick = () => column.length <= 5 && addBall(id);
  return (
    <div className="wrap__column" onClick={handleClick}>
      {column.map((ball, i) => (
        <Ball key={`ball${i}`}  player={column[i].player} />
      ))}
    </div>
  );
};
export default Column;
