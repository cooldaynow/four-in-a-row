const ADD_BALL = 'ADD_BALL';

let player = false;
export const addBall = id => {
  player = !player;
  return {
    type: ADD_BALL,
    id,
    player: player ? 'x' : 'y',
  };
};
