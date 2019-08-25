import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSync, faHome} from '@fortawesome/free-solid-svg-icons';
import './index.scss';

const ModalButtons = ({restart, headHome}) => {
  return (
    <div className="modal__buttons">
      <button onClick={restart} className="choose__button">
        <FontAwesomeIcon icon={faSync} />
      </button>
      <button onClick={headHome} className="choose__button">
        <FontAwesomeIcon icon={faHome} />
      </button>
    </div>
  );
};

export default ModalButtons;
