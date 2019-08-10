import React from 'react';
import {connect} from 'react-redux';
import Board from '../../components/Board';
const mapStateToProps = state => {
  return {
    columns: state.board.columns,
    board: state.board,
  };
};

export default connect(
  mapStateToProps,
)(Board);
