import React from 'react';
import PropTypes from 'prop-types';

const formatTime = (seconds) => {
  const date = new Date(seconds * 1000);

  let mm = date.getMinutes();
  let ss = date.getSeconds();

  if (mm < 10) { mm = `0${mm}`; }
  if (ss < 10) { ss = `0${ss}`; }
  return `${mm}:${ss}`;
};

const CountdownTimer = (props) => {
  const { time } = props;
  const className = ((time - 1) < 4) ? 'text-danger' : '';

  return (
    <div className={`clock-wrapper ${className}`}>
      <h4>{formatTime(time)}</h4>
    </div>
  );
};

CountdownTimer.propTypes = {
  time: PropTypes.number.isRequired
};

export default CountdownTimer;
