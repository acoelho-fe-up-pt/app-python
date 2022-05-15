const processUserInput = (index, userInput, currentQuestionIndex, maxInput) => {
  if (userInput[currentQuestionIndex] === undefined) {
    userInput[currentQuestionIndex] = [];
  }

  if (userInput[currentQuestionIndex].length < maxInput) {
    userInput[currentQuestionIndex].push(index);
  } else {
    console.warn(`User input for this question reached the limit of possibilities. (${maxInput})`);
  }
  return userInput;
};

const isCorrectUserInputSingle = (currentQuestionIndex, userInput, correctAnswer) => {
  if (userInput[currentQuestionIndex] && userInput[currentQuestionIndex].length === 1) {
    return userInput[currentQuestionIndex][0] === correctAnswer;
  }
  return false;
};

const isCorrectUserInputMultiple = (currentQuestionIndex, userInput, correctAnswer) => {
  let counter = 0;
  if (userInput[currentQuestionIndex]) {
    for (let i = 0; i < correctAnswer.length; i += 1) {
      if (userInput[currentQuestionIndex].includes(correctAnswer[i])) {
        counter += 1;
      }
    }
  }
  return counter === correctAnswer.length;
};

const disabledAll = {
  0: { disabled: true },
  1: { disabled: true },
  2: { disabled: true },
  3: { disabled: true }
};

const singleAnswerButtons = (index, correctAnswer, prevState) => {
  const buttons = {
    ...prevState.buttons,
    ...disabledAll,
    [index - 1]: {
      className: (index === correctAnswer) ? 'correct' : 'incorrect',
      disabled: true
    }
  };

  if (index !== correctAnswer) {
    buttons[correctAnswer - 1] = {
      className: 'solution',
      disabled: true
    };
  }

  return { buttons };
};

const multipleAnswerButtons = (index, correctAnswer, prevState) => {
  const buttons = {
    ...prevState.buttons,
    [index - 1]: {
      disabled: !prevState.buttons[index - 1],
      className: (correctAnswer.includes(index)) ? 'correct' : 'incorrect'
    },
  };

  return { buttons };
};

export default {
  processUserInput,
  isCorrectUserInputSingle,
  isCorrectUserInputMultiple,
  singleAnswerButtons,
  multipleAnswerButtons
};
