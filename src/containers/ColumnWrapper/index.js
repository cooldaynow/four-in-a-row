import {connect} from 'react-redux';
import Column from '../../components/Column';
import {addBall, changePlayer, setGameOver} from '../../actions';
import testWinner from '../../gameLogic';

const mapStateToProps = state => {
  return {
    gameOver: state.board.gameOver,
    columns: Object.values(state.board.columns),
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addBall: index => dispatch(addBall(index)),
    changePlayer: () => dispatch(changePlayer()),
    //checkGameOver: () => dispatch(checkGameOver()),
    checkGameOver: columns => dispatch(setGameOver(testWinner(columns))),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Column);
