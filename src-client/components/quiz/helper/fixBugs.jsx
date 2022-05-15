const processUserInput = (input, index, userInput, currentQuestionIndex) => {
  if (userInput[currentQuestionIndex] === undefined) {
    userInput[currentQuestionIndex] = [];
  }

  userInput[currentQuestionIndex] = userInput[currentQuestionIndex]
    .filter((inputObj) => inputObj.input !== input);

  if (index) {
    userInput[currentQuestionIndex].push({ input, option: index });
  }
  return userInput;
};

const isCorrectUserInput = (currentQuestionIndex, userInput, correctAnswer) => {
  let counter = 0;
  if (userInput[currentQuestionIndex]
        && userInput[currentQuestionIndex].length === correctAnswer.length) {
    for (let i = 0; i < correctAnswer.length; i += 1) {
      if (userInput[currentQuestionIndex]
        .some((userInputObj) => userInputObj.input === correctAnswer[i].input
            && userInputObj.option === correctAnswer[i].option)) {
        counter += 1;
      }
    }
  }
  return counter === correctAnswer.length;
};

export default {
  processUserInput,
  isCorrectUserInput
};
