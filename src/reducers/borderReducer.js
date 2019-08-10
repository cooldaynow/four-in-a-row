const initialState = {
  0:[],
  1:[],
  2:[],
  3:[],
  4:[],
  5:[],
  6:[],
  columns : new Array(6).fill(0)
};
const borderReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BALL':
      console.log(state);
      return {
      ...state,
      [action.id]: [...state[action.id], {id: action.id}],
    };
    default:
      return state;
  }
};
export default borderReducer;
