import {connect} from 'react-redux';
import Column from '../../components/Column';
import {addBall} from '../../actions';


const mapDispatchToProps = dispatch => {
  return {
    addBall: id => dispatch(addBall(id)),
  };
};
export default connect(
  null,
  mapDispatchToProps,
)(Column);
