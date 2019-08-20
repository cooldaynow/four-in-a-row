import React from 'react';
import {connect} from 'react-redux';
import {start, changeColor} from '../../actions';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlayCircle} from '@fortawesome/free-solid-svg-icons';
import './index.scss';

const StartScreen = ({start, player, changeColor, color}) => (
  <div className="screen__wrap">
    <div className="screen__header">
      <div className="left balls" />
      <h1> 4 In A Row </h1>
      <div className="right balls" />
    </div>
    <div className="screen__buttons">
      <button className="start__button" onClick={start}>
        <FontAwesomeIcon icon={faPlayCircle} />{' '}
      </button>
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
