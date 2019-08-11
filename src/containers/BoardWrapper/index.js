import {connect} from 'react-redux';
import Board from '../../components/Board';
const mapStateToProps = state => {
  return {
    columns: Object.values(state.board.columns),
  };
};

export default connect(mapStateToProps)(Board);
