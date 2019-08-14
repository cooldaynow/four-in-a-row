const initialState = {
  columns: {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
  },
  player: true,
  gameOver: false,
};
const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BALL':
      return {
        ...state,
        columns: {
          ...state.columns,
          [action.index]: [...state.columns[action.index], state.player],
        },
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
    default:
      return state;
  }
};
export default boardReducer;
