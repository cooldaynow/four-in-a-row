import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserCog} from '@fortawesome/free-solid-svg-icons';
import './index.scss';
const SettingsButton = ({settings}) => (
  <button className="choose__button" onClick={settings}>
    <FontAwesomeIcon icon={faUserCog} />
  </button>
);

export default SettingsButton;
