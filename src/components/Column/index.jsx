import React from 'react';
import './index.scss';
import Ball from '../../components/Ball';

const Column = ({column,gameEnd, addBall, changePlayer, index, columns,checkWinner}) => {
  const handleClick = () => {
    column.length <= 5 && addBall(index);
    changePlayer()
    checkWinner(columns)
  };
  return (
    <div className="wrap__column" onClick={handleClick}>
      {gameEnd && <p> afdsaklfajsfkljsafkas</p>}
      {column &&
        column.map((ball, i) => <Ball key={`ball${i}`} player={column[i]} />)}
    </div>
  );
};
export default Column;
