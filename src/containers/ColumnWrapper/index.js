import React from 'react';
import {connect} from 'react-redux';
import {addBall, changePlayer} from '../../actions';
import BallWrapper from '../BallWrapper';
import './index.scss';

const ColumnWrapper = ({index, column, addBall, isGameOver, changePlayer}) => {
  const nextMove = () => {
    if (column.length <= 5 && !isGameOver) {
      addBall(index);
      changePlayer();
    }
  };
  return (
    <div className="wrap__column" onClick={nextMove}>
      {column.map((ball, i) => (
        <BallWrapper key={`Ball ${i}`} playerNumber={column[i]} col={index} row={i} />
      ))}
    </div>
  );
};

const mapStateToProps = ({isGameOver}) => ({
  isGameOver,
});
const mapDispatchToProps = dispatch => ({
  addBall: index => dispatch(addBall(index)),
  changePlayer: () => dispatch(changePlayer()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ColumnWrapper);
