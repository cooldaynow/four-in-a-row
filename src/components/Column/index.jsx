import React, {useEffect} from 'react';
import './index.scss';
import Ball from '../../components/Ball';

const Column = ({
  index,
  column,
  addBall,
  gameOver,
  changePlayer,
  checkGameOver,
  columns,
}) => {
  const handleClick = () => {
    if (column.length <= 5 && !gameOver) {
      addBall(index);
      changePlayer();
    }
  };
  useEffect(() => {
    checkGameOver(columns);
  }, [column.length]);
  return (
    <div className="wrap__column" onClick={handleClick}>
      {column &&
        column.map((ball, i) => <Ball key={`ball${i}`} player={column[i]} />)}
    </div>
  );
};
export default Column;
