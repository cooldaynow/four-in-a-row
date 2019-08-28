import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {testWinner} from '../../gameLogic';
import Ball from '../../components/Ball';
import './index.scss';

const BallWrapper = ({playerNumber, colorNumber, isGameOver, col, row, cols}) => {
  const [win, setWin] = useState(null);

  useEffect(() => {
    const winCoords = testWinner(cols) || [];
    winCoords.map((elemCoords, i) => {
      elemCoords.map((el, index) => {
        if (elemCoords[index] === col && elemCoords[index + 1] === row) {
          Promise.resolve(
            setTimeout(() => {
              setWin(true);
            }, 200),
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
  }, [isGameOver, col, row, cols]);

  return (
    <Ball
      isGameOver={isGameOver}
      win={win}
      colorNumber={colorNumber}
      playerNumber={playerNumber}
    />
  );
};
const mapStateToProps = ({isGameOver, colorNumber, cols}) => ({
  isGameOver,
  colorNumber,
  cols,
});

export default connect(mapStateToProps)(BallWrapper);
