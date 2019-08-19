import React from 'react';
import {connect} from 'react-redux';
import Ball from '../../components/Ball';
import {start, changeColor} from '../../actions';
import './index.scss';

const StartScreen = ({start, player, changeColor, color}) => (
  <div className="screen__wrap">
    <h1> 4 In A Row </h1>
    <div className="screen__buttons">
      <button onClick={start}> START </button>
    </div>
  </div>
);

const mapStateToProps = state => {
  return {
    startGame: state.board.startGame,
    player: state.board.player,
    color: state.board.color,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    start: () => dispatch(start()),
    changeColor: () => dispatch(changeColor()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StartScreen);
