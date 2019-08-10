import React from 'react';
import './index.scss';

const Column = ({column, addBall, id}) => {
  console.log(column, id);
  let handleClick = () => column.length < 5 && addBall(id);
  return (
    <div className="wrap__column" onClick={handleClick}>
      {column.map((ball, i) => (
        <div className="ball" key={i * Math.random()}>
          {column[i].info}
        </div>
      ))}
    </div>
  );
};
export default Column;
