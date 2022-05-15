/* eslint-disable react/no-array-index-key */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const Answers = (props) => {
  const {
    registerFillSpacesAnswer,
    checkMultipleChoiceAnswer,
    registerBuildCodeAnswer,
    question: {
      answers, correctAnswer, questionType, answerType
    },
    buttons
  } = props;

  let {
    question: { answerSelectionType }
  } = props;

  answerSelectionType = answerSelectionType || 'single';

  return (
    <div className={`answers answers-${questionType}Btn`}>
      {answers.map((answer, index) => (
        <button
          key={`answerBtn${index}`}
          type="button"
          disabled={buttons[index] !== undefined ? buttons[index].disabled || false : false}
          className={`${buttons[index] !== undefined && buttons[index].className
            ? buttons[index].className : ''} answerBtn btn ${questionType}Btn`}
          onClick={() => {
            if (questionType === 'fillSpaces') registerFillSpacesAnswer(index + 1);
            if (questionType === 'multipleChoice') checkMultipleChoiceAnswer(index + 1, correctAnswer, answerSelectionType);
            if (questionType === 'buildCode') registerBuildCodeAnswer(index + 1);
          }}
        >
          {questionType === 'multipleChoice'
          && answerType === 'text' && answer}
          {questionType === 'multipleChoice'
          && answerType === 'photo'
       && (
       <img
         src={`${process.env.PUBLIC_URL}/assets/resources/${answer}`}
         alt=""
       />
       )}
          {questionType !== 'multipleChoice'
          && answer}
        </button>
      ))}
    </div>
  );
};

Answers.propTypes = {
  buttons: PropTypes.any.isRequired,
  registerFillSpacesAnswer: PropTypes.func.isRequired,
  checkMultipleChoiceAnswer: PropTypes.func.isRequired,
  registerBuildCodeAnswer: PropTypes.func.isRequired,
  question: PropTypes.shape({
    answers: PropTypes.array.isRequired,
    correctAnswer: PropTypes.any.isRequired,
    questionType: PropTypes.string.isRequired,
    answerType: PropTypes.any,
    answerSelectionType: PropTypes.any,
  }).isRequired
};

export default Answers;
