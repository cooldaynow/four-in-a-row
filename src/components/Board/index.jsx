import React, {useEffect} from 'react';

import ColumnWrapper from '../../containers/ColumnWrapper';
import './index.scss';

const Board = ({columns, gameEnd, player}) => {

  return (
    <div className="board">
      {/*winner && <p>{player.toString()}</p>}
      {winner === false && <p>{player.toString()}fdsjkfjs</p>*/}
      {gameEnd && <p>{player.toString()}</p>}
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
