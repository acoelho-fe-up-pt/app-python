import React from 'react';
import PropTypes from 'prop-types';

const SubmitAnswerBtn = (props) => {
  const {
    evaluateAnswer,
    appLocale: {
      submitAnswerBtn
    }
  } = props;
  return (
    <div>
      <button
        type="button"
        onClick={evaluateAnswer}
        className="nextQuestionBtn btn"
      >
        {submitAnswerBtn}
      </button>
    </div>
  );
};

SubmitAnswerBtn.propTypes = {
  evaluateAnswer: PropTypes.func.isRequired,
  appLocale: PropTypes.shape({
    submitAnswerBtn: PropTypes.string.isRequired
  }).isRequired
};

export default SubmitAnswerBtn;
