import React from 'react';
import {connect} from 'react-redux';
import BoardWrapper from '../BoardWrapper';
import Modal from '../Modal';
import StartScreen from '../StartScreen';
import ChooseColor from '../ChooseColor';
import './index.scss';

const App = ({startGame, gameOver, chooseColor}) => {
  return (
    <div className="app">
      {gameOver && <Modal />}
      {chooseColor ? (
        startGame ? (
          <BoardWrapper />
        ) : (
          <ChooseColor />
        )
      ) : (
        <StartScreen />
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  chooseColor: state.board.chooseColor,
  startGame: state.board.startGame,
  gameOver: state.board.gameOver,
});

export default connect(mapStateToProps)(App);
