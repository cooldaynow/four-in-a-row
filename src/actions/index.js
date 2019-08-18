import testWinner from '../gameLogic';
const ADD_BALL = 'ADD_BALL';
const CHANGE_PLAYER = 'CHANGE_PLAYER';
const GAME_OVER = 'GAME_OVER';
const RESTART = 'RESTART';

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
<<<<<<< HEAD
export const setGameOver = columns => {
  const gameOver = testWinner(columns);
=======
export const setGameOver = gameOver => {
>>>>>>> c1343bb3326d7229e4d613662d04a70c89ed1fb6
  return {
    type: GAME_OVER,
    gameOver,
  };
};
<<<<<<< HEAD
=======
const restart = () => ({type:RESTART});
export const restartGame = () => {
  return  (dispatch) => {
    setTimeout (()=> {
      dispatch(restart())
    }, 1000)

  }
}
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

>>>>>>> c1343bb3326d7229e4d613662d04a70c89ed1fb6
