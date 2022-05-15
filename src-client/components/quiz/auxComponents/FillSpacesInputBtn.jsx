/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

const FillSpacesInputBtn = (props) => {
  const {
    isCorrect,
    index,
    answers,
    currentQuestionUserInput,
    isDisabled
  } = props;

  const styleObject = {
    width: 'fit-content',
    minWidth: '2.5rem',
    minHeight: '2.5rem',
    height: 'auto',
    margin: '0 4px',
    border: '2px dashed #bbb',
    textAlign: 'center',
    verticalAlign: 'middle',
    display: 'inline-flex'
  };

  let answer = '';
  if (currentQuestionUserInput !== undefined) {
    if (currentQuestionUserInput[index - 1]
    && answers && answers.length
    && answers[currentQuestionUserInput[index - 1] - 1]) {
      answer = answers[currentQuestionUserInput[index - 1] - 1];
    }
  }

  if (isDisabled) {
    styleObject.backgroundColor = 'lightgray';
    styleObject.opacity = '0.8';
  }

  if (isCorrect !== undefined) {
    styleObject.backgroundColor = isCorrect ? 'green' : 'red';
  }

  return (
    <div
      id={`input${index}`}
      key={`input${index}`}
      className="input"
      style={styleObject}
    >
      {answer}
    </div>
  );
};

FillSpacesInputBtn.defaultProps = {
  isCorrect: undefined,
  isDisabled: false
};

FillSpacesInputBtn.propTypes = {
  isCorrect: PropTypes.bool,
  index: PropTypes.number.isRequired,
  answers: PropTypes.array,
  currentQuestionUserInput: PropTypes.array,
  isDisabled: PropTypes.bool
};

export default FillSpacesInputBtn;
