import React from 'react';
import './index.scss';

const ChangeColor = ({changeColor, start}) => {
  const whiteStart = () => {
    changeColor();
    start();
  };
  return (
    <div className="btn__group">
      <div onClick={whiteStart} className={'white'} />
      <div onClick={start} className={'black'} />
    </div>
  );
};

export default ChangeColor;
