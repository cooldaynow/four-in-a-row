import testWinner from '../gameLogic';
const ADD_BALL = 'ADD_BALL';
const CHANGE_PLAYER = 'CHANGE_PLAYER';
const CHANGE_COLOR = 'CHANGE_COLOR';
const GAME_OVER = 'GAME_OVER';
const RESTART_GAME = 'RESTART_GAME';
const START = 'START';

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
export const start = () => {
  return {
    type: START,
  };
};
export const restartGame = () => {
  return {
    type: RESTART_GAME,
  };
};
export const changeColor = () => ({type: CHANGE_COLOR});
