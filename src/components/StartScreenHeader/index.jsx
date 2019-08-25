import React from 'react';
import './index.scss';

const StartScreenHeader = () => (
  <div className="screen__header">
    <div className="left balls" />
    <h1>
      <a
        href="https://github.com/cooldaynow/four-in-a-row"
        target="_blank"
        title="Link to GitHub"
        rel="noopener noreferrer">
        {' '}
        4 In A Row
      </a>{' '}
    </h1>
    <div className="right balls" />
  </div>
);

export default StartScreenHeader;
