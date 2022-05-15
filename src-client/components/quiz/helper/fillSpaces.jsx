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

const cleanUserInput = (userInput, currentQuestionIndex, onlyLastAnswer) => {
  if (userInput[currentQuestionIndex] === undefined
    || !userInput[currentQuestionIndex].length) {
    console.log('Nothing to clean here');
    return [];
  }

  if (!onlyLastAnswer) {
    userInput[currentQuestionIndex] = [];
  } else {
    userInput[currentQuestionIndex].pop();
  }
  return userInput;
};

const isCorrectUserInput = (currentQuestionIndex, userInput, correctAnswer) => {
  let counter = 0;
  if (userInput[currentQuestionIndex]
    && userInput[currentQuestionIndex].length === correctAnswer.length) {
    for (let i = 0; i < correctAnswer.length; i += 1) {
      if (userInput[currentQuestionIndex][i] === correctAnswer[i]) {
        counter += 1;
      }
    }
  }
  return counter === correctAnswer.length;
};

export default {
  processUserInput,
  cleanUserInput,
  isCorrectUserInput
};
