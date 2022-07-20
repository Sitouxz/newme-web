import React from 'react';

const ProgressBar = ({ bgcolor, progress, height }) => {
  const Parentdiv = {
    height: height,
    width: '100%',
    backgroundColor: '#061109',
    borderRadius: 40,
    margin: '0 12px',
  };

  const Childdiv = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor: bgcolor,
    borderRadius: 40,
  };

  return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span></span>
      </div>
    </div>
  );
};

export default ProgressBar;
