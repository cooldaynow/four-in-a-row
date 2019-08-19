import {connect} from 'react-redux';
import {restartGame} from '../../actions';
import React, {useEffect, useState} from 'react';
import './index.scss';

const Modal = ({gameOver, restartGame, player}) => {
  const [modal, setModal] = useState('none');
  const handleClick = () => {
    setModal('modal none');
    setTimeout(() => {
      restartGame();
    }, 500);
  };
  useEffect(() => {
    setTimeout(() => {
      setModal('modal');
    }, 500);
  }, []);

  return (
    /*<div className={gameOver ? 'modal' : 'modal none'}>*/
    <div className={`${modal}`}>
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
