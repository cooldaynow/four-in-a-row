const ADD_BALL = 'ADD_BALL';
const CHANGE_PLAYER = 'CHANGE_PLAYER';
const CHECK_WINNER = 'CHECK_WINNER';

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
export const checkWinner = (gameEnd) => {
  return {
    type: CHECK_WINNER,
    gameEnd
  };
}; 
