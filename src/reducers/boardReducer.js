import testWinner from '../gameLogic/';
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
  gameEnd: null,
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
      return {
        ...state,
        player: !state.player,
      };
    case 'CHECK_WINNER':
      console.log('work')
      return {
        ...state,
        gameEnd: action.gameEnd,
      };
    default:
      return state;
  }
};
export default boardReducer;
