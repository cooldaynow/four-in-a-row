import React from 'react';
import BoardWrapper from '../../containers/BoardWrapper';
import Modal from '../../containers/Modal';
import './index.scss';

const App = () => {
  return (
    <div className='app'>
      <BoardWrapper /> 
      <Modal />
    </div>
  );
}





export default App;
