import React from 'react';
import {connect} from 'react-redux';
import {addBall, changePlayer} from '../../actions';
import BallWrapper from '../BallWrapper';
import './index.scss';

const ColumnWrapper = ({index, column, addBall, gameOver, changePlayer}) => {
  const handleClick = () => {
    if (column.length <= 5 && !gameOver) {
      addBall(index);
      changePlayer();
    }
  };
  return (
    <div className="wrap__column" onClick={handleClick}>
      {column.map((ball, i) => (
        <BallWrapper key={`Ball ${i}`} player={column[i]} col={index} row={i} />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  gameOver: state.board.gameOver,
});
const mapDispatchToProps = dispatch => ({
  addBall: index => dispatch(addBall(index)),
  changePlayer: () => dispatch(changePlayer()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ColumnWrapper);
