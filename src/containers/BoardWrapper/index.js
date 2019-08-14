import {connect} from 'react-redux';
import Board from '../../components/Board';

const mapStateToProps = state => {
  const columns = Object.values(state.board.columns);
  return {
    columns,
    gameOver:state.board.gameOver,
    player: !state.board.player,
  };
};

export default connect(mapStateToProps)(Board);
