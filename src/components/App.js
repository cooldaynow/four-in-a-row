import React from 'react';
import './App/index.scss';

const App = ({addBall, border}) => {
  console.log(border);
  return (
    <div className="app">
      <button onClick={() => addBall(0)}> addBall </button>
      {border.map((elem, i) => (
        <div
          onClick={() => addBall(i)}
          className="column"
          key={i * Math.random()}
        />
      ))}
    </div>
  );
};

export default App;
