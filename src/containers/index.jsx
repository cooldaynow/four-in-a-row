import { connect } from 'react-redux'
import { addBall } from '../actions'
import App from '../components/App'

const mapStateToProps = (state, ownProps) => ({
  border :state.border.columns 
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  addBall: (id) => dispatch(addBall(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
