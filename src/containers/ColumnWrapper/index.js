import {connect} from 'react-redux';
import Column from '../../components/Column';
import {addBall, changePlayer,checkWinner} from '../../actions';
import testWinner from '../../gameLogic';

const mapStateToProps =(state) => {
  const columns = Object.values(state.board.columns);
  return {
    columns:testWinner(columns),
    gameEnd:state.board.gameEnd
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addBall: index => dispatch(addBall(index)),
    changePlayer: () => dispatch(changePlayer()),
    checkWinner: (gameEnd)=>dispatch(checkWinner(gameEnd))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Column);
