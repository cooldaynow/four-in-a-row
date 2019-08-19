import React from 'react';
import BoardWrapper from '../../containers/BoardWrapper';
import Modal from '../../containers/Modal';
import StartScreen from '../../containers/StartScreen';
import {connect} from 'react-redux';
import './index.scss';

const App = ({startGame, gameOver}) => {
  return (
    <div className="app">
      {gameOver && <Modal />}
      {startGame ? (
        <>
          <BoardWrapper />
        </>
      ) : (
        <StartScreen />
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    startGame: state.board.startGame,
    gameOver: state.board.gameOver,
  };
};

export default connect(mapStateToProps)(App);
