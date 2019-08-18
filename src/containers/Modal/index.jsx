import {connect} from 'react-redux';
import {setGameOver, restartGame} from '../../actions';
import React from 'react';
import './index.scss';

const Modal = ({gameOver, restartGame, player}) => {
  const handleClick = () => {
    restartGame();
  };

  return (
    <div className={gameOver ? 'modal' : 'modal none'}>
      <p> {player ? 'player 1 win' : 'player 2 win'} </p>
      <button onClick={handleClick}>RESTART</button>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    gameOver: state.board.gameOver,
    player: !state.board.player,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    restartGame: () => dispatch(restartGame()),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal);
