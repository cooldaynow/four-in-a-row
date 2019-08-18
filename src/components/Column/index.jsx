import React from 'react';
import Ball from '../../components/Ball';
import './index.scss';

const Column = ({
  index,
  column,
  addBall,
  gameOver,
  changePlayer,
  checkGameOver,
}) => {
  const handleClick = () => {
    if (column.length <= 5 && !gameOver) {
      addBall(index);
      changePlayer();
      checkGameOver();
    }
  };
  return (
    <div className="wrap__column" onClick={handleClick}>
      {column.map((ball, i) => (
        <Ball key={`ball${i}`} player={column[i]} />
      ))}
    </div>
  );
};
export default Column;
