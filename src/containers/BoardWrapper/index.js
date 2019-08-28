import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {setGameOver} from '../../actions';
import ColumnWrapper from '../../containers/ColumnWrapper';
import BoardHeader from '../../components/BoardHeader';
import './index.scss';

const BoardWrapper = ({cols, checkGameOver, colorNumber, playerNumber}) => {
  const [animation, setAnimation] = useState('wrap__board none');
  useEffect(() => {
    checkGameOver(cols);
    setTimeout(() => {
      setAnimation('wrap__board');
    }, 100);
  }, [cols, checkGameOver]);
  return (
    <div className={animation}>
      <BoardHeader colorNumber={colorNumber} playerNumber={playerNumber} />
      <div className="wrap__cols">
        {cols.map((col, i) => (
          <ColumnWrapper key={`Col ${i}`} column={cols[i]} index={i} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = ({cols, colorNumber, playerNumber}) => ({
  cols,
  colorNumber,
  playerNumber,
});

const mapDispatchToProps = dispatch => ({
  checkGameOver: columns => dispatch(setGameOver(columns)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BoardWrapper);
