/*const initialState = {
  0: [],
  1: [],
  2: [],
  3: [],
  4: [],
  5: [],
  6: [],
  player: true,
  columns: new Array(6).fill(0),
};*/
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
};
const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BALL':
      return {
        ...state,
        ['columns']: {
          ...state.columns,
          [action.id]: [...state.columns[action.id], {player: state.player}],
        },
        ['player']: !state.player,
      };
    default:
      return state;
  }
};
export default boardReducer;
