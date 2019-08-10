const initialState = {
  0: [],
  1: [],
  2: [],
  3: [],
  4: [],
  5: [],
  6: [],
  columns: new Array(6).fill(0),
};
const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BALL':
      return {
        ...state,
        [action.id]: [...state[action.id], {info: action.player}],
      };
    default:
      return state;
  }
};
export default boardReducer;
