import {connect} from 'react-redux';
import Column from '../../components/Column';
import {addBall, changePlayer,checkGameOver } from '../../actions';

const mapStateToProps = state => {
  return {
    gameOver: state.board.gameOver,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addBall: index => dispatch(addBall(index)),
    changePlayer: () => dispatch(changePlayer()),
    checkGameOver: () => dispatch(checkGameOver()),
    // checkGameOver: columns => dispatch(setGameOver(columns)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Column);
