import React from 'react';
import PropTypes from 'prop-types';

const ResultFilter = (props) => {
  const {
    handleChange,
    filteredValue,
    appLocale: {
      resultFilterAll,
      resultFilterCorrect,
      resultFilterIncorrect
    }
  } = props;
  return (
    <div className="quiz-result-filter">
      <select value={filteredValue} onChange={handleChange}>
        <option value="all">{resultFilterAll}</option>
        <option value="correct">{resultFilterCorrect}</option>
        <option value="incorrect">{resultFilterIncorrect}</option>
      </select>
    </div>
  );
};

ResultFilter.propTypes = {
  filteredValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  appLocale: PropTypes.shape({
    resultFilterAll: PropTypes.string.isRequired,
    resultFilterCorrect: PropTypes.string.isRequired,
    resultFilterIncorrect: PropTypes.string.isRequired
  }).isRequired
};

export default ResultFilter;
