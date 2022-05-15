const processUserInput = (index, userInput, currentQuestionIndex, maxInput, answers) => {
  if (userInput[currentQuestionIndex] === undefined) {
    userInput[currentQuestionIndex] = [];
  }
  if (userInput[currentQuestionIndex].length < maxInput + 1) {
    const answer = answers[index - 1];
    const line = Math.max(userInput[currentQuestionIndex].length - 1, 0);
    if (answer === '\\n') {
      if (userInput[currentQuestionIndex][line]
        && userInput[currentQuestionIndex][line].length) {
        userInput[currentQuestionIndex][line + 1] = [];
      }
    } else {
      if (userInput[currentQuestionIndex][line] === undefined) {
        userInput[currentQuestionIndex][line] = [];
      }
      userInput[currentQuestionIndex][line].push(index);
    }
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
  if (userInput[currentQuestionIndex]) {
    userInput[currentQuestionIndex] = userInput[currentQuestionIndex].filter((el) => el.length);

    for (let i = 0; i < correctAnswer.length; i += 1) {
      let cnt = 0;
      const possibleCorrectAnswer = correctAnswer[i];

      if (userInput[currentQuestionIndex].length === possibleCorrectAnswer.length) {
        for (let j = 0; j < possibleCorrectAnswer.length; j += 1) {
          const possibleCorrectAnswerLine = possibleCorrectAnswer[j];
          cnt += (Array.isArray(possibleCorrectAnswerLine)
          && Array.isArray(userInput[currentQuestionIndex][j])
         && possibleCorrectAnswerLine.length === userInput[currentQuestionIndex][j].length
         && possibleCorrectAnswerLine.every(
           (val, index) => val === (userInput[currentQuestionIndex][j][index])
         ))
            ? 1
            : 0;
        }
      }
      if (cnt === possibleCorrectAnswer.length) {
        return true;
      }
    }
  }

  return false;
};
export default {
  processUserInput,
  cleanUserInput,
  isCorrectUserInput
};
