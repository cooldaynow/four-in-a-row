import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {setGameOver} from '../../actions';
import ColumnWrapper from '../../containers/ColumnWrapper';
import './index.scss';

const BoardWrapper = ({cols, checkGameOver}) => {
  const [animation, setAnimation] = useState('board none');
  useEffect(() => {
    checkGameOver(cols);
    setTimeout(() => {
      setAnimation('board');
    }, 0);
  }, [cols, checkGameOver]);
  return (
    <div className={animation}>
      {cols.map((col, i) => (
        <ColumnWrapper key={`Col ${i}`} column={cols[i]} index={i} />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  cols: state.board.cols,
});

const mapDispatchToProps = dispatch => ({
  checkGameOver: columns => dispatch(setGameOver(columns)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BoardWrapper);
