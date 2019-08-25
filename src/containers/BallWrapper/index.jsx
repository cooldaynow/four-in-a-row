import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {winCoords} from '../../gameLogic';
import Ball from '../../components/Ball';
import './index.scss';

const BallWrapper = ({player, color, gameOver, winner, col, row}) => {
  const [win, setWin] = useState(null);
  useEffect(() => {
    winCoords.map((elemCoords, i) => {
      elemCoords.map((el, index) => {
        if (elemCoords[index] === col && elemCoords[index + 1] === row) {
          Promise.resolve(
            setTimeout(() => {
              setWin(true);
            }, 200)
          ).then(() => {
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

  return <Ball gameOver={gameOver} win={win} color={color} player={player} />;
};
const mapStateToProps = state => ({
  gameOver: state.board.gameOver,
  winner: !state.board.player,
  color: state.board.color,
});

export default connect(mapStateToProps)(BallWrapper);
