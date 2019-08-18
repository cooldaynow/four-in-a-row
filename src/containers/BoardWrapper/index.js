import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {setGameOver} from '../../actions';
import ColumnWrapper from '../../containers/ColumnWrapper';
import './index.scss';

const BoardWrapper = ({cols, gameOver, player, checkGameOver}) => {
  useEffect(() => {
    console.log(cols);
    checkGameOver(cols);
  }, [cols, checkGameOver]);
  return (
    <div className="board">
      {gameOver && <p>{player.toString()}</p>}
      {cols.map((col, i) => (
        <ColumnWrapper
          key={i}
          column={cols[i]}
          index={i}
          className="wrap__column"
        />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
<<<<<<< HEAD
    cols: state.board.cols,
=======
    columns,
>>>>>>> c1343bb3326d7229e4d613662d04a70c89ed1fb6
    gameOver: state.board.gameOver,
    player: !state.board.player,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    checkGameOver: columns => dispatch(setGameOver(columns)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BoardWrapper);
