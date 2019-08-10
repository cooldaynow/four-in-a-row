import React from 'react';
import ColumnContainer from '../../containers/ColumnContainer';
import './index.scss';

const Board = ({columns, board, addBall}) => (
  
  <div className="board">
    {columns.map((el, i) => (
      <ColumnContainer key = {i} column = {board[i]} id = {i} />
    ))}
  </div>
);

export default Board;
