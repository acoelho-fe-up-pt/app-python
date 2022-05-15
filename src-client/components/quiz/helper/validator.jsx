const log = (type = 'log', data, obj = false) => {
  if (process.env.NODE_ENV !== 'production') {
    if (obj) {
      console[type](data, obj);
    } else {
      console[type](data);
    }
  }
};

const fixBugsValidator = (currentQuestion) => {
  const {
    inputs,
    correctAnswer
  } = currentQuestion;

  if (!inputs) {
    log('error', "Field 'inputs' is required.");
    return false;
  }

  if (!correctAnswer) {
    log('error', "Field 'correctAnswer' is required.");
    return false;
  }

  if (!Array.isArray(correctAnswer)) {
    log('error', "Field 'correctAnswer' should be an Array.");
    return false;
  }

  if (!correctAnswer.every((elem) => typeof elem === 'object'
  && Object.keys(elem).includes('input')
  && typeof elem.input === 'number'
  && Object.keys(elem).includes('option')
  && typeof elem.option === 'number')) {
    log('error', "Field 'correctAnswer' it should be an array of objects { input: <number>, option: <number> }.");
    return false;
  }

  return true;
};

const buildCodeValidator = (currentQuestion) => {
  const {
    correctAnswer
  } = currentQuestion;

  if (!correctAnswer) {
    log('error', "Field 'correctAnswer' is required.");
    return false;
  }

  if (!Array.isArray(correctAnswer)) {
    log('error', "Field 'correctAnswer' should be an Array.");
    return false;
  }

  if (!correctAnswer.every((elem) => Array.isArray(elem))) {
    log('error', "Field 'correctAnswer' it should be an array of arrays.");
    return false;
  }
  return true;
};

const fillSpacesValidator = (currentQuestion) => {
  const {
    correctAnswer,
    answers
  } = currentQuestion;

  if (!correctAnswer) {
    log('error', "Field 'correctAnswer' is required.");
    return false;
  }

  if (!Array.isArray(correctAnswer)) {
    log('error', "Field 'correctAnswer' should be an Array.");
    return false;
  }

  if (!correctAnswer.every((elem) => typeof elem === 'number')) {
    log('error', "Field 'correctAnswer' it should be an array of numbers.");
    return false;
  }
  if (!correctAnswer.every((elem) => elem !== 0 && elem <= answers.length)) {
    log('error', 'Field \'correctAnswer\' contains the positions of the correct answers defined in answers.');
    return false;
  }

  return true;
};

const multipleChoiceValidator = (currentQuestion) => {
  const {
    answers,
    answerType,
    answerSelectionType,
    correctAnswer
  } = currentQuestion;
  if (!answerSelectionType) {
    log('warn', 'Field answerSelectionType should be defined');
    return false;
  }

  if (answerSelectionType !== 'single' && answerSelectionType !== 'multiple') {
    log('warn', `The value of answerSelectionType is either 'single' or 'multiple'. (${answerSelectionType})`);
    return false;
  }

  if (typeof answerSelectionType !== 'string') {
    log('error', "Field 'answerSelectionType' should be a string.");
    return false;
  }

  if (!correctAnswer) {
    log('error', "Field 'correctAnswer' is required.");
    return false;
  }

  if (answerSelectionType === 'single' && typeof correctAnswer !== 'number') {
    log('error', 'answerSelectionType is single but expecting number in the field correctAnswer');
    return false;
  }

  if (answerSelectionType === 'multiple' && !Array.isArray(correctAnswer)) {
    log('error', 'answerSelectionType is multiple but expecting Array in the field correctAnswer');
    return false;
  }

  if (!answerType) {
    log('error', "Field 'answerType' is required.");
    return false;
  }

  if (typeof answerType !== 'string') {
    log('error', "Field 'answerType' should be a string.", {});
    return false;
  }

  if (answerType !== 'text' && answerType !== 'photo') {
    log('error', "The value of 'answerType' is either 'text' or 'photo'.");
    return false;
  }

  if (Array.isArray(correctAnswer)) {
    if (!correctAnswer.every((elem) => typeof elem === 'number')) {
      log('error', "Field 'correctAnswer' it should be an array of numbers.");
      return false;
    }
    if (!correctAnswer.every((elem) => elem !== 0 && elem <= answers.length)) {
      log('error', 'Field \'correctAnswer\' contains the positions of the correct answers defined in answers.');
      return false;
    }
  }
  if (!Array.isArray(correctAnswer)) {
    if (typeof correctAnswer !== 'number') {
      log('error', "Field 'correctAnswer' it should be a number.");
      return false;
    }
    if (!(correctAnswer <= answers.length || correctAnswer !== 0)) {
      log('error', 'Field \'correctAnswer\' it is the position of the correct answer defined in answers.');
      return false;
    }
  }

  return true;
};

const quizValidator = (quiz) => {
  if (!quiz) {
    log('error', 'Quiz object is required.');
    return false;
  }

  const { questions, nQuestion } = quiz;
  if (!questions) {
    log('error', "Field 'questions' is required.");
    return false;
  }

  if (!nQuestion) {
    log('error', "Field 'nQuestion' is required.");
    return false;
  }

  if (typeof nQuestion !== 'number') {
    log('error', "Field 'nQuestion' should be a number.");
    return false;
  }

  for (let i = 0; i < questions.length; i += 1) {
    const currentQuestion = questions[i];
    const {
      question,
      questionType,
      answers,
      time,
      level,
      penalty,
      reward
    } = currentQuestion;

    if (!question) {
      log('error', "Field 'question' is required.");
      return false;
    }

    if (!questionType) {
      log('error', "Field 'questionType' is required.", currentQuestion);
      return false;
    }

    if (!['multipleChoice', 'fillSpaces', 'fixBugs', 'buildCode'].includes(questionType)) {
      log('error', "Unknown 'questionType'.");
      return false;
    }
    if (questionType === 'multipleChoice' && !multipleChoiceValidator(currentQuestion)) {
      log('error', 'MultipleChoice question invalid!', currentQuestion);
      return false;
    }

    if (questionType === 'fixBugs' && !fixBugsValidator(currentQuestion)) {
      log('error', 'fixBugs question invalid!', currentQuestion);
      return false;
    }

    if (questionType === 'fillSpaces' && !fillSpacesValidator(currentQuestion)) {
      log('error', 'fillSpaces question invalid!', currentQuestion);
      return false;
    }

    if (questionType === 'buildCode' && !buildCodeValidator(currentQuestion)) {
      log('error', 'buildCode question invalid!', currentQuestion);
      return false;
    }

    if (questionType !== 'fixBugs') {
      if (!answers) {
        log('error', "Field 'answers' is required.");
        return false;
      } if (!Array.isArray(answers)) {
        log('error', "Field 'answers' has to be an Array");
        return false;
      }
    }

    if (time && typeof time !== 'number') {
      log('error', "Field 'time' should be a number.", currentQuestion);
      return false;
    }

    if (!level) {
      log('error', "Field 'level' is required.", currentQuestion);
      return false;
    }

    if (typeof level !== 'number') {
      log('error', "Field 'level' should be a number.", currentQuestion);
      return false;
    }

    if (!penalty) {
      log('error', "Field 'penalty' is required.", currentQuestion);
      return false;
    }

    if (typeof penalty !== 'number') {
      log('error', "Field 'penalty' should be a number.", currentQuestion);
      return false;
    }

    if (!reward) {
      log('error', "Field 'reward' is required.", currentQuestion);
      return false;
    }

    if (typeof reward !== 'number') {
      log('error', "Field 'reward' should be a number.", currentQuestion);
      return false;
    }
  }

  return true;
};

export default quizValidator;
