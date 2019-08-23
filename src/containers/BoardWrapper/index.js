import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {setGameOver, setDrawOver} from '../../actions';
import ColumnWrapper from '../../containers/ColumnWrapper';
import Ball from '../../components/Ball';
import './index.scss';

const BoardWrapper = ({cols, checkGameOver, checkDrawOver, color, player}) => {
  const [animation, setAnimation] = useState('board none');
  useEffect(() => {
    checkGameOver(cols);
    checkDrawOver(cols);
    setTimeout(() => {
      setAnimation('board');
    }, 0);
  }, [cols, checkGameOver, checkDrawOver]);
  return (
    <div className={animation}>
      <Ball color={color} player={player} />
      <div className="cols">
        {cols.map((col, i) => (
          <ColumnWrapper key={`Col ${i}`} column={cols[i]} index={i} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  cols: state.board.cols,
  color: state.board.color,
  player: state.board.player,
});

const mapDispatchToProps = dispatch => ({
  checkGameOver: columns => dispatch(setGameOver(columns)),
  checkDrawOver: columns => dispatch(setDrawOver(columns)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BoardWrapper);
