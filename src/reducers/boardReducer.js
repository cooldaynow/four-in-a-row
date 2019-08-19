const initialState = {
  cols: [[], [], [], [], [], [], []],
  player: true,
  color: true,
  gameOver: false,
  startGame: false,
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
    case 'CHANGE_COLOR':
      //console.log('change color');
      return {
        ...state,
        color: !state.color,
      };
    case 'GAME_OVER':
      //  console.log('game over');
      return {
        ...state,
        gameOver: action.gameOver,
      };
    case 'RESTART_GAME':
      return {
        ...initialState,
        startGame: true,
      };
    case 'START':
      return {
        ...state,
        startGame: true,
      };
    default:
      return state;
  }
};
export default boardReducer;
