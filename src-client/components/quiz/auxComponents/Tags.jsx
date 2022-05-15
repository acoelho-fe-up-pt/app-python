/* eslint-disable react/no-array-index-key */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import {
  levelTag, questionTypeTag, selectionNumberTag
} from '../helper/tags';

const Tags = (props) => {
  const {
    appLocale: {
      multipleChoiceTagText,
      buildCodeTagText,
      fixBugsTagText,
      fillSpacesTagText,
      pickNumberOfSelection,
      questionLevelTag,
      feedbackCorrect,
      feedbackError
    },
    question: { level, questionType, correctAnswer: questionCorrectAnswer },
    endQuiz,
    incorrectAnswer,
    correctAnswer
  } = props;
  const numberOfSelection = Array.isArray(questionCorrectAnswer)
    ? questionCorrectAnswer.length
    : 1;

  return (
    <div className="tag-container">
      { level
      && levelTag(level, questionLevelTag)}
      { !endQuiz
      && questionType
       && questionTypeTag(questionType, {
         multipleChoiceTagText,
         buildCodeTagText,
         fixBugsTagText,
         fillSpacesTagText
       })}
      {!endQuiz
       && questionType === 'multipleChoice'
       && !correctAnswer
       && !incorrectAnswer
       && selectionNumberTag(pickNumberOfSelection, numberOfSelection)}
      {correctAnswer
      && (
      <span className="question-feedback-success">
        {feedbackCorrect}
      </span>
      )}
      {incorrectAnswer
       && (
       <span className="question-feedback-error">
         {feedbackError}
       </span>
       )}
    </div>
  );
};

Tags.propTypes = {
  question: PropTypes.shape({
    level: PropTypes.number.isRequired,
    questionType: PropTypes.string.isRequired,
    correctAnswer: PropTypes.any.isRequired
  }).isRequired,
  appLocale: PropTypes.shape({
    multipleChoiceTagText: PropTypes.string.isRequired,
    buildCodeTagText: PropTypes.string.isRequired,
    fixBugsTagText: PropTypes.string.isRequired,
    fillSpacesTagText: PropTypes.string.isRequired,
    pickNumberOfSelection: PropTypes.string.isRequired,
    questionLevelTag: PropTypes.string.isRequired,
    feedbackCorrect: PropTypes.string.isRequired,
    feedbackError: PropTypes.string.isRequired
  }).isRequired,
  endQuiz: PropTypes.bool.isRequired,
  incorrectAnswer: PropTypes.bool.isRequired,
  correctAnswer: PropTypes.bool.isRequired
};

export default Tags;
