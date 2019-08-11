const ADD_BALL = 'ADD_BALL';

export const addBall = id => {
  return {
    type: ADD_BALL,
    id,
  };
};
