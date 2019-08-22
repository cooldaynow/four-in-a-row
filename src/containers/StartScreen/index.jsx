import React from 'react';
import {connect} from 'react-redux';
import {firstPlayerChooseColor} from '../../actions';
import SettingsButton from '../../components/SettingsButton';
import StartScreenHeader from '../../components/StartScreenHeader';
import './index.scss';

const StartScreen = ({firstPlayerChooseColor}) => (
  <div className="screen__wrap">
    <StartScreenHeader />
    <SettingsButton settings={firstPlayerChooseColor} />
  </div>
);

const mapDispatchToProps = dispatch => ({
  firstPlayerChooseColor: () => dispatch(firstPlayerChooseColor()),
});

export default connect(
  null,
  mapDispatchToProps,
)(StartScreen);
