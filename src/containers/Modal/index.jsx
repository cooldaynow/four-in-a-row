import {connect} from 'react-redux';
import {restartGame} from '../../actions';
import React, {useEffect, useState} from 'react';
import './index.scss';

const Modal = ({restartGame, player}) => {
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
    }, 1500);
  }, []);

  return (
    <div className={`${modal}`}>
      <p> {player ? 'player 1 win' : 'player 2 win'} </p>
      <button onClick={handleClick}>RESTART</button>
    </div>
  );
};
const mapStateToProps = state => ({
  player: !state.board.player,
});
const mapDispatchToProps = dispatch => ({
  restartGame: () => dispatch(restartGame()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal);
