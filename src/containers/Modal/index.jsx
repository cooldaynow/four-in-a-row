import {connect} from 'react-redux';
import {restartGame, goHome} from '../../actions';
import React, {useEffect, useState} from 'react';
import ModalButtons from '../../components/ModalButtons';
import './index.scss';

const Modal = ({restartGame, goHome, playerNumber, isGameOver}) => {
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
      isGameOver === 'draw' ? 300 : 1500,
    );
  }, [isGameOver]);

  return (
    <div className={`wrap__modal ${modal}`}>
      <h1>
        {' '}
        {isGameOver === 'draw'
          ? 'dRAW :) '
          : playerNumber === 1
          ? 'First player WON!'
          : 'Second player WON!'}{' '}
      </h1>
      <ModalButtons restart={restart} headHome={headHome} />
    </div>
  );
};
const mapStateToProps = ({playerNumber , isGameOver})=> ({
  playerNumber : playerNumber === 1 ? 2 : 1,
  isGameOver
});
const mapDispatchToProps = dispatch => ({
  restartGame: () => dispatch(restartGame()),
  goHome: () => dispatch(goHome()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal);
