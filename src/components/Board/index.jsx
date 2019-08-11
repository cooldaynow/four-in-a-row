import React from 'react';
import ColumnWrapper from '../../containers/ColumnWrapper';
import './index.scss';

const Board = ({columns}) =>{
  console.log(columns);
  return (
  <div className="board">
    {columns.map((col, i) => (
      <ColumnWrapper
        key={i}
        column={columns[i]}
        id={i}
        className="wrap__column"
      />
    ))}
  </div>
);

}
export default Board;
