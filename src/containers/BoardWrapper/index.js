import {connect} from 'react-redux';
import Board from '../../components/Board';
import testWinner from '../../gameLogic';
import {checkWinner} from '../../actions';

const mapStateToProps = state => {
  const columns = Object.values(state.board.columns);
  return {
    columns,
    // gameEnd: testWinner(columns),
    gameEnd:state.board.gameEnd,
    player: !state.player,
  };
};

export default connect(mapStateToProps)(Board);
