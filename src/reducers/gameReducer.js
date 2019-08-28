const initialState = {
  cols: Array(7).fill([]),
  playerNumber: 1,
  colorNumber: 1,
  isGameOver: false,
  isStartGame: false,
  isColorChoose: false,
};
const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BALL':
      return {
        ...state,
        cols: state.cols.map((col, index) => {
          if (index === action.index) {
            return [...col, state.playerNumber];
          }
          return col;
        }),
      };
    case 'CHANGE_PLAYER':
      return {
        ...state,
        playerNumber: state.playerNumber === 1 ? 2 : 1,
      };
    case 'CHANGE_COLOR':
      return {
        ...state,
        colorNumber: state.colorNumber === 1 ? 2 : 1,
      };
    case 'GAME_OVER':
      return {
        ...state,
        isGameOver: action.isGameOver,
      };
    case 'RESTART_GAME':
      return {
        ...initialState,
        isStartGame: true,
        isColorChoose: true,
      };
    case 'START':
      return {
        ...state,
        isStartGame: true,
      };
    case 'CHOOSE_COLOR':
      return {
        ...state,
        isColorChoose: true,
      };
    case 'HOME':
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
export default boardReducer;
