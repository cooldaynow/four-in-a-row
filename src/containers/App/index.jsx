import React from 'react';
import {connect} from 'react-redux';
import BoardWrapper from '../BoardWrapper';
import Modal from '../Modal';
import StartScreen from '../StartScreen';
import ChooseColor from '../ChooseColor';
import './index.scss';

const App = ({isStartGame, isGameOver, isColorChoose}) => (
  <div className="app">
    {isGameOver && <Modal />}
    {isColorChoose ? (
      isStartGame ? (
        <BoardWrapper />
      ) : (
        <ChooseColor />
      )
    ) : (
      <StartScreen />
    )}
  </div>
);

const mapStateToProps = ({isColorChoose, isStartGame, isGameOver}) => ({
  isColorChoose,
  isStartGame,
  isGameOver,
});

export default connect(mapStateToProps)(App);
