const initialState = {
  cols: [[], [], [], [], [], [], []],
  player: true,
  gameOver: false,
};
const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BALL':
      // console.log('add TEST', state.cols);
      return {
        ...state,
        cols: [
          ...state.cols.slice(0, action.index),
          [...state.cols[action.index], state.player],
          ...state.cols.slice(action.index + 1),
        ],
      };
    case 'CHANGE_PLAYER':
      //console.log('change player');
      return {
        ...state,
        player: !state.player,
      };
    case 'GAME_OVER':
      //  console.log('game over');
      return {
        ...state,
        gameOver: action.gameOver,
      };
    case 'RESTART' :
      return {
        ...initialState
      }
    default:
      return state;
  }
};
export default boardReducer;
