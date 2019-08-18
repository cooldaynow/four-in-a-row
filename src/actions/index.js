import testWinner from '../gameLogic';
const ADD_BALL = 'ADD_BALL';
const CHANGE_PLAYER = 'CHANGE_PLAYER';
const GAME_OVER = 'GAME_OVER';

export const addBall = index => {
  return {
    type: ADD_BALL,
    index,
  };
};
export const changePlayer = () => {
  return {
    type: CHANGE_PLAYER,
  };
};
export const setGameOver = columns => {
  const gameOver = testWinner(columns);
  return {
    type: GAME_OVER,
    gameOver,
  };
};
