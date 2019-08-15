import React from 'react';
import ColumnWrapper from '../../containers/ColumnWrapper';
import './index.scss';

const Board = ({columns, gameOver, player}) => {
  //console.log(columns,'columns')
  return (
    <div className='board'>
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
