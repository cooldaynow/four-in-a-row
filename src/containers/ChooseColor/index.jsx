import React from 'react';
import {connect} from 'react-redux';
import {changeColor, start} from '../../actions';
import ChangeColor from '../../components/ChangeColor';
import './index.scss';

const ChooseColor = ({start, changeColor}) => {
  return (
    <div className="wrap__choose">
      <h1>First player color selection</h1>
      <ChangeColor start = {start} changeColor={changeColor} />
    </div>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    start: () => dispatch(start()),
    changeColor: () => dispatch(changeColor()),
  };
};


export default connect(
  null,
  mapDispatchToProps,
)(ChooseColor);
