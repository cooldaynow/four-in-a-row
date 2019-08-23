import {connect} from 'react-redux';
import {restartGame} from '../../actions';
import React, {useEffect, useState} from 'react';
import './index.scss';

const Modal = ({restartGame, player, drawOver}) => {
  const [modal, setModal] = useState('none');
  const handleClick = () => {
    setModal('modal none');
    setTimeout(() => {
      restartGame();
    }, 300);
  };
  useEffect(() => {
    setTimeout(() => {
      setModal('modal');
    },drawOver ?  300 : 1500);
  }, [drawOver]);

  return (
    <div className={`${modal}`}>
      <p>
        {' '}
        {drawOver ? 'dRAW :) ' : player ? 'player 1 win' : 'player 2 win'}{' '}
      </p>
      <button onClick={handleClick}>RESTART</button>
    </div>
  );
};
const mapStateToProps = state => ({
  player: !state.board.player,
  drawOver: state.board.drawOver,
});
const mapDispatchToProps = dispatch => ({
  restartGame: () => dispatch(restartGame()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal);
