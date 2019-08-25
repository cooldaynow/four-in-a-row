const initialState = {
  cols: [[], [], [], [], [], [], []],
  player: true,
  color: true,
  gameOver: false,
  startGame: false,
  chooseColor: false,
};
const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BALL':
      return {
        ...state,
        cols: [
          ...state.cols.slice(0, action.index),
          [...state.cols[action.index], state.player],
          ...state.cols.slice(action.index + 1),
        ],
      };
    case 'CHANGE_PLAYER':
      return {
        ...state,
        player: !state.player,
      };
    case 'CHANGE_COLOR':
      return {
        ...state,
        color: !state.color,
      };
    case 'GAME_OVER':
      return {
        ...state,
        gameOver: action.gameOver,
      };
    case 'RESTART_GAME':
      return {
        ...initialState,
        startGame: true,
        chooseColor: true,
      };
    case 'START':
      return {
        ...state,
        startGame: true,
      };
    case 'CHOOSE_COLOR':
      return {
        ...state,
        chooseColor: true,
      };
    case 'DRAW':
      return {
        ...state,
        drawOver: action.drawOver,
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
