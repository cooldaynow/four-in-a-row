import React from 'react';
import {connect} from 'react-redux';
import {addBall, changePlayer} from '../../actions';
import Ball from '../../components/Ball';
import './index.scss';

const ColumnWrapper = ({
  index,
  column,
  addBall,
  gameOver,
  changePlayer,
  cols,
  addTest,
  color,
}) => {
  const handleClick = () => {
    if (column.length <= 5 && !gameOver) {
      addBall(index);
      changePlayer();
      // console.log(cols)
    }
  };
  return (
    <div className="wrap__column" onClick={handleClick}>
      {column.map((ball, i) => (
        <Ball key={`Ball ${i}`} player={column[i]} color={color} />
      ))}
    </div>
  );
};
const mapStateToProps = state => {
  return {
    gameOver: state.board.gameOver,
    cols: state.board.cols,
    color: state.board.color,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addBall: index => dispatch(addBall(index)),
    changePlayer: () => dispatch(changePlayer()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ColumnWrapper);
