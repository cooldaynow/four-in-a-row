import {testWinner, testDraw} from '../gameLogic';
const ADD_BALL = 'ADD_BALL';
const CHANGE_PLAYER = 'CHANGE_PLAYER';
const CHANGE_COLOR = 'CHANGE_COLOR';
const GAME_OVER = 'GAME_OVER';
const RESTART_GAME = 'RESTART_GAME';
const START = 'START';
const HOME = 'HOME';
const CHOOSE_COLOR = 'CHOOSE_COLOR';

export const setGameOver = columns => {
  const winner = testWinner(columns);
  const draw = testDraw(columns);
  let isGameOver;
  if (winner) {
    isGameOver= true;
  }
  if (draw) {
    isGameOver = 'draw';
  }

  return {
    type: GAME_OVER,
    isGameOver,
  };
};

export const goHome = () => ({type: HOME});
export const addBall = index => ({type: ADD_BALL, index});
export const start = () => ({type: START});
export const changePlayer = () => ({type: CHANGE_PLAYER});
export const firstPlayerChooseColor = () => ({type: CHOOSE_COLOR});
export const changeColor = () => ({type: CHANGE_COLOR});
export const restartGame = () => ({type: RESTART_GAME});
