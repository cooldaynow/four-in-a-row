import React, {useEffect} from 'react';


import ColumnWrapper from '../../containers/ColumnWrapper';
import './index.scss';

const Board = ({columns, gameOver, player}) => {
console.log(player,'player')
  return (
    <div className="board">
      {gameOver && <p>{player.toString()}</p>}
      {columns.map((col, i) => (
        <ColumnWrapper
          key={i}
          column={columns[i]}
          index={i}
          className="wrap__column"
        />
      ))}
    </div>
  );
};
export default Board;
