import {connect} from 'react-redux';
import {restartGame, goHome} from '../../actions';
import React, {useEffect, useState} from 'react';
import ModalButtons from '../../components/ModalButtons';
import './index.scss';

const Modal = ({restartGame, goHome, player, drawOver}) => {
  const [modal, setModal] = useState('none');

  const restart = () => {
    setModal('none');
    setTimeout(() => {
      restartGame();
    }, 500);
  };
  const headHome = () => {
    setModal('none');
    setTimeout(() => {
      goHome();
    }, 500);
  };
  useEffect(() => {
    setTimeout(
      () => {
        setModal('');
      },
      drawOver ? 300 : 1500,
    );
  }, [drawOver]);

  return (
    <div className={`wrap__modal ${modal}`}>
      <h1>
        {' '}
        {drawOver ? 'dRAW :) ' : player ? 'First player WON!' : 'Second player WON!'}{' '}
      </h1>
      <ModalButtons restart={restart} headHome ={headHome} />
    </div>
  );
};
const mapStateToProps = state => ({
  player: !state.board.player,
  drawOver: state.board.drawOver,
});
const mapDispatchToProps = dispatch => ({
  restartGame: () => dispatch(restartGame()),
  goHome: () => dispatch(goHome()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal);
