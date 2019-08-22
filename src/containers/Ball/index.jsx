import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {winCoords} from '../../gameLogic';
import './index.scss';

const Ball = ({player, color, gameOver, winner, col, row}) => {
  const [win, setWin] = useState(null);
  useEffect(() => {
    winCoords.map((elemCoords, i) => {
      elemCoords.map((el, index) => {
        if (elemCoords[index] === col && elemCoords[index + 1] === row) {
          Promise.resolve(setWin(true)).then(() => {
            setTimeout(() => {
              setWin(false);
            }, 500);
          });
        }
        return null;
      });
      return null;
    });
    //console.log('effect ball');
  }, [gameOver, col, row]);

  return (
    <div
      className={
        gameOver && win
          ? 'ball win'
          : color === player
          ? 'ball black'
          : 'ball white'
      }>
      {player ? '1' : '2'}
    </div>
  );
};
const mapStateToProps = state => ({
  gameOver: state.board.gameOver,
  winner: !state.board.player,
  color: state.board.color,
});

export default connect(mapStateToProps)(Ball);
