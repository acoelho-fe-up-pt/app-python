import React from 'react';
import PropTypes from 'prop-types';

const NextQuestionBtn = (props) => {
  const {
    nextQuestion,
    appLocale: {
      nextQuestionBtn
    }
  } = props;
  return (
    <div>
      <button
        type="button"
        onClick={nextQuestion}
        className="nextQuestionBtn btn"
      >
        {nextQuestionBtn}
      </button>
    </div>
  );
};

NextQuestionBtn.propTypes = {
  nextQuestion: PropTypes.func.isRequired,
  appLocale: PropTypes.shape({
    nextQuestionBtn: PropTypes.string.isRequired
  }).isRequired
};

export default NextQuestionBtn;
