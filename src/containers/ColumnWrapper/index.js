import React from 'react';
import {connect} from 'react-redux';
<<<<<<< HEAD
import {addBall, changePlayer} from '../../actions';
import Ball from '../../components/Ball';
import './index.scss';
=======
import Column from '../../components/Column';
import {addBall, changePlayer,checkGameOver } from '../../actions';
>>>>>>> c1343bb3326d7229e4d613662d04a70c89ed1fb6

const ColumnWrapper = ({
  index,
  column,
  addBall,
  gameOver,
  changePlayer,
  cols,
  addTest,
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
        <Ball key={`ball${i}`} player={column[i]} />
      ))}
    </div>
  );
};
const mapStateToProps = state => {
  return {
    gameOver: state.board.gameOver,
<<<<<<< HEAD
    cols: state.board.cols,
=======
>>>>>>> c1343bb3326d7229e4d613662d04a70c89ed1fb6
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addBall: index => dispatch(addBall(index)),
    changePlayer: () => dispatch(changePlayer()),
<<<<<<< HEAD
=======
    checkGameOver: () => dispatch(checkGameOver()),
    // checkGameOver: columns => dispatch(setGameOver(columns)),
>>>>>>> c1343bb3326d7229e4d613662d04a70c89ed1fb6
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ColumnWrapper);
