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
export const setGameOver = gameOver=> {
  return {
    type: GAME_OVER,
    gameOver,
  };
};
export const checkGameOver = () => {
  return (dispatch, getState) => {
    const {
      board: {columns},
    } = getState();
    const gameOver = testWinner(Object.values(columns));
    console.log(gameOver);
    dispatch(setGameOver(gameOver));
  };
};
