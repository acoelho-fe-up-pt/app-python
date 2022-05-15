/* eslint-disable react/no-danger */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { store as reactNotifications } from 'react-notifications-component';
import marked from 'marked';
import dompurify from 'dompurify';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import defaultLocale from './Locale';
import SelectFixBugs from './auxComponents/SelectFixBugs';
import Tags from './auxComponents/Tags';

const notificationJson = (title, message, type, duration) => ({
  title,
  message,
  type,
  insert: 'top',
  container: 'top-right',
  animationIn: ['animated', 'fadeIn'],
  animationOut: ['animated', 'fadeOut'],
  dismiss: {
    duration,
    onScreen: true,
    pauseOnHover: true
  }
});

const notifyExplanation = (explanation, message, type) => {
  if (explanation) {
    reactNotifications.addNotification(notificationJson(message, defaultLocale.explainationTag.replace('<explaination>', explanation), type, 2000));
  } else {
    reactNotifications.addNotification(notificationJson(message, ' ', type, 2000));
  }
};

const renderMessageforCorrectAnswer = (question) => {
  const defaultMessage = 'You are correct. Please click Next to continue.';
  return question.messageForCorrectAnswer || defaultMessage;
};

const renderMessageforIncorrectAnswer = (question) => {
  const defaultMessage = 'Incorrect answer. Please try again.';
  return question.messageForIncorrectAnswer || defaultMessage;
};

function fillSpacesResult({
  problem,
  answers,
  correctAnswer,
  isIncorrectAnswer
}, userInputIndex) {
  let cnt = 0;
  let cnt2 = 0;

  return (
    <div>
      <p><b>Resposta :</b></p>
      {problem.map((line, index) => {
        const dataSliped = line.split(/{{(input\d)}}/);
        return (
          <div key={`line${index}`} style={{ textAlign: 'left' }}>
            <h2 className="row">
              {dataSliped.map((element, index2) => {
                if (element.includes('input') && element.length <= 8) {
                  cnt += 1;
                  const inputResIndex = userInputIndex[(cnt - 1)];
                  const data = inputResIndex ? answers[inputResIndex - 1] : '';
                  const isCorrect = inputResIndex && correctAnswer[(cnt - 1)] === inputResIndex;
                  return (
                    <span
                      style={{
                        width: 'fit-content',
                        minWidth: '2.5rem',
                        minHeight: '2.5rem',
                        height: 'auto',
                        margin: '0 4px',
                        border: `2px dashed ${isCorrect ? 'green' : 'red'}`,
                        textAlign: 'center',
                        verticalAlign: 'middle',
                        display: 'inline-flex'
                      }}
                    >
                      {data}
                    </span>
                  );
                }
                if (element === '{{tab}}') {
                  return (
                    <Col
                      xs="auto"
                      style={{
                        minWidth: '2.5rem',
                        minHeight: '2.5rem',
                        height: 'auto'
                      }}
                      key={`line${index}element${index2}`}
                    />
                  );
                }
                const tab = element.split(/{{(tab)}}/).filter((el) => el !== '');
                return tab.map((elementF, indexF) => {
                  if (elementF === 'tab') {
                    return (
                      <Col
                        xs="auto"
                        style={{
                          minWidth: '2.5rem',
                          minHeight: '2.5rem',
                          height: 'auto'
                        }}
                        key={`line${index}element${index2}${indexF}`}
                      />
                    );
                  }
                  return (
                    <Col xs="auto" key={`line${index}element${index2}${indexF}`}>
                      {elementF}
                    </Col>
                  );
                });
              })}
            </h2>
          </div>
        );
      })}
      {isIncorrectAnswer && (<p><b>Correção :</b></p>) }
      {isIncorrectAnswer && problem.map((line, index) => {
        const dataSliped = line.split(/{{(input\d)}}/);
        return (
          <div key={`line${index}`}>
            <h2>
              {dataSliped.map((element) => {
                if (element.includes('input') && element.length <= 8) {
                  cnt2 += 1;
                  return answers[correctAnswer[(cnt2 - 1)] - 1];
                }
                return element;
              })}
            </h2>
          </div>
        );
      })}
    </div>
  );
}

function fixBugsResult({
  problem,
  inputs,
  correctAnswer,
  isIncorrectAnswer
}, userInputIndex = []) {
  let cnt = 0;
  let cnt2 = 0;

  return (
    <Container className="problem-section">
      <p><b>Resposta :</b></p>
      {problem.map((line, index) => {
        const dataSliped = line.split(/{{(input\d)}}/);
        return (
          <Row key={`line${index}`}>
            {dataSliped.map((element, index2) => {
              if (element.includes('input') && element.length <= 8) {
                cnt += 1;
                const { options, selected } = inputs[`input${cnt}`];
                const inputResIndex = userInputIndex.find((inputObj) => inputObj.input === cnt);
                const data = inputResIndex ? options[inputResIndex.option - 1] : selected;
                return (
                  <Col xs="auto" key={cnt}>
                    <SelectFixBugs
                      key={cnt}
                      isDisabled
                      index={cnt}
                      inputs={{ options: [], selected: data }}
                    />
                  </Col>
                );
              }
              if (element === '{{tab}}') {
                return (
                  <Col
                    xs="auto"
                    style={{
                      minWidth: '2.5rem',
                      minHeight: '2.5rem',
                      height: 'auto'
                    }}
                    key={`line${index}element${index2}`}
                  />
                );
              }
              const tab = element.split(/{{(tab)}}/).filter((el) => el !== '');
              return tab.map((elementF, indexF) => {
                if (elementF === 'tab') {
                  return (
                    <Col
                      xs="auto"
                      style={{
                        minWidth: '2.5rem',
                        minHeight: '2.5rem',
                        height: 'auto'
                      }}
                      key={`line${index}element${index2}${indexF}`}
                    />
                  );
                }
                return (
                  <Col xs="auto" key={`line${index}element${index2}${indexF}`}>
                    {elementF}
                  </Col>
                );
              });
            })}
          </Row>
        );
      })}
      {isIncorrectAnswer && (<p><b>Correção :</b></p>) }
      {isIncorrectAnswer && problem.map((line, index) => {
        const dataSliped = line.split(/{{(input\d)}}/);
        return (
          <Row key={`line${index}`}>
            {dataSliped.map((element, index2) => {
              if (element.includes('input') && element.length <= 8) {
                cnt2 += 1;
                const { options, selected } = inputs[`input${cnt2}`];
                const correctAnswerIndex = correctAnswer.find(
                  (inputObj) => inputObj.input === cnt2
                );
                const data = correctAnswerIndex
                  ? options[correctAnswerIndex.option - 1] : selected;
                return (
                  <Col xs="auto" key={cnt2}>
                    <SelectFixBugs
                      key={cnt2}
                      isDisabled
                      index={cnt2}
                      inputs={{ options: [], selected: data }}
                    />
                  </Col>
                );
              }
              if (element === '{{tab}}') {
                return (
                  <Col
                    xs="auto"
                    style={{
                      minWidth: '2.5rem',
                      minHeight: '2.5rem',
                      height: 'auto'
                    }}
                    key={`line${index}element${index2}`}
                  />
                );
              }
              const tab = element.split(/{{(tab)}}/).filter((el) => el !== '');
              return tab.map((elementF, indexF) => {
                if (elementF === 'tab') {
                  return (
                    <Col
                      xs="auto"
                      style={{
                        minWidth: '2.5rem',
                        minHeight: '2.5rem',
                        height: 'auto'
                      }}
                      key={`line${index}element${index2}${indexF}`}
                    />
                  );
                }
                return (
                  <Col xs="auto" key={`line${index}element${index2}${indexF}`}>
                    {elementF}
                  </Col>
                );
              });
            })}
          </Row>
        );
      })}
    </Container>
  );
}

function multipleChoiceResult(question, userInputIndex) {
  const {
    answers, answerType, correctAnswer
  } = question;
  let { answerSelectionType } = question;

  answerSelectionType = answerSelectionType || 'single';
  let answerBtnCorrectClassName;
  let answerBtnIncorrectClassName;

  return answers.map((answer, index) => {
    const key = index;

    if (answerSelectionType === 'single') {
      answerBtnCorrectClassName = (index + 1 === correctAnswer ? ' correct ' : '');
      if (!Array.isArray(userInputIndex)) {
        answerBtnIncorrectClassName = (userInputIndex !== correctAnswer && index + 1 === userInputIndex ? ' incorrect ' : '');
      } else {
        answerBtnIncorrectClassName = (!userInputIndex.includes(correctAnswer) && userInputIndex.includes(index + 1) ? ' incorrect ' : '');
      }
    } else {
      answerBtnCorrectClassName = (correctAnswer.includes(index + 1) ? ' correct ' : '');
      answerBtnIncorrectClassName = (!correctAnswer.includes(index + 1) && userInputIndex.includes(index + 1) ? ' incorrect ' : '');
    }

    return (
      <div key={key}>
        <button disabled className={`answerBtn btn ${answerBtnCorrectClassName} ${answerBtnIncorrectClassName}`}>
          {answerType === 'text' && <span>{answer}</span>}
          {answerType === 'photo' && <img alt="" src={`${process.env.PUBLIC_URL}/assets/resources/${answer}`} />}
        </button>
      </div>
    );
  });
}

function buildCodeResult({
  answers,
  correctAnswer,
  isIncorrectAnswer
}, userInputIndex) {
  return (
    <div>
      <p><b>Resposta :</b></p>
      <div
        style={{
          minWidth: '2.5rem',
          minHeight: '2.5rem',
          height: 'auto',
          margin: '0 4px',
          backgroundColor: '#151515',
          color: `${isIncorrectAnswer ? 'red' : 'green'}`
        }}
      >
        {userInputIndex.map((line, index) => (
          <div key={`line${index}`}>
            <h2>
              {line.map((element) => answers[element - 1])}
            </h2>
          </div>
        ))}
      </div>
      {isIncorrectAnswer && (<p><b>Correção :</b></p>) }
      {isIncorrectAnswer
           && (
           <div
             style={{
               minWidth: '2.5rem',
               minHeight: '2.5rem',
               height: 'auto',
               margin: '0 4px',
               backgroundColor: '#151515',
               color: 'white'
             }}
           >
             {correctAnswer[0].map((line, index) => (
               <div key={`line${index}`}>
                 <h2>
                   {line.map((element) => answers[element - 1])}
                 </h2>
               </div>
             ))}
           </div>
           )}
    </div>
  );
}

const renderAnswerInResult = (question, userInputIndex) => {
  const { questionType } = question;

  if (questionType === 'fillSpaces') {
    return fillSpacesResult(question, userInputIndex);
  }

  if (questionType === 'fixBugs') {
    return fixBugsResult(question, userInputIndex);
  }

  if (questionType === 'multipleChoice') {
    return multipleChoiceResult(question, userInputIndex);
  }

  if (questionType === 'buildCode') {
    return buildCodeResult(question, userInputIndex);
  }

  return <h1>Error</h1>;
};

function pointsCalc(questions, correct, incorrect) {
  let totalPoints = 0;
  let correctPoints = 0;
  let incorrectPoints = 0;

  for (let i = 0; i < questions.length; i += 1) {
    let reward = questions[i].reward || 0;
    let penalty = questions[i].penalty || 0;

    if (typeof reward === 'string' || reward instanceof String) {
      reward = parseInt(reward, 10);
    }

    if (typeof penalty === 'string' || penalty instanceof String) {
      penalty = parseInt(penalty, 10);
    }

    if (correct.includes(i)) {
      correctPoints += reward;
    } else if (incorrect.includes(i)) {
      incorrectPoints += penalty;
    }
    totalPoints += reward;
  }

  return {
    resultPoints: correctPoints - incorrectPoints,
    totalPoints,
    correctPoints,
    incorrectPoints
  };
}

// eslint-disable-next-line consistent-return
const renderExplanation = (question, isResultPage, correctAnswer = false) => {
  const { explanation } = question;
  let message = '';
  let type = 'info';

  if (isResultPage) {
    if (explanation) {
      return (
        <div className="explaination">
          {defaultLocale.explainationTag.replace('<explaination>', explanation)}
        </div>
      );
    }
  } else {
    if (correctAnswer) {
      message = renderMessageforCorrectAnswer(question);
      type = 'success';
    } else {
      message = renderMessageforIncorrectAnswer(question);
      type = 'danger';
    }

    notifyExplanation(explanation, message, type);
  }
};

const orderByLevel = (questions) => questions.sort((a, b) => {
  if (a.level < b.level) return -1;
  if (a.level > b.level) return 1;
  return 0;
});

const shufflingQuestions = (nQuestion, questions) => {
  for (let i = questions.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]];
  }

  let shuffledQuestions = [];
  let alternativeQuestions = [];
  const nQuestionToInclude = Math.min(questions.length, nQuestion);

  for (let i = 0; i < nQuestionToInclude; i += 1) {
    const currentLevel = i + 1;
    const levelQuestions = questions.filter((question) => question.level === currentLevel);
    if (levelQuestions) {
      const [first, ...rest] = levelQuestions;
      if (first) {
        shuffledQuestions.push(first);
      }
      if (rest && rest.length) {
        alternativeQuestions = alternativeQuestions.concat(rest);
      }
    }
  }

  while (alternativeQuestions && shuffledQuestions
    && alternativeQuestions.length && shuffledQuestions.length < nQuestionToInclude) {
    shuffledQuestions.push(...alternativeQuestions.splice(0, 1));
  }

  shuffledQuestions = orderByLevel(shuffledQuestions);
  alternativeQuestions = orderByLevel(alternativeQuestions);

  return {
    shuffledQuestions,
    alternativeQuestions
  };
};

const rawMarkup = (data) => {
  const sanitizer = dompurify.sanitize;
  return { __html: marked(sanitizer(data)) };
};

const disabledAll = {
  0: { disabled: true },
  1: { disabled: true },
  2: { disabled: true },
  3: { disabled: true }
};

const disableButtons = (answers, buttons) => {
  if (answers) {
    for (let i = 0; i < answers.length; i += 1) {
      if (buttons[i]) {
        buttons[i].disabled = true;
      } else { buttons[i] = { disabled: true }; }
    }
  }
  return buttons;
};

const renderTagsResult = (question) => {
  const { isCorrectAnswer, isIncorrectAnswer } = question;

  return (
    <Tags
      question={question}
      appLocale={defaultLocale}
      correctAnswer={isCorrectAnswer}
      incorrectAnswer={isIncorrectAnswer}
      endQuiz
    />
  );
};

const renderQuizResultQuestions = (selectResult, filteredValue = 'all') => {
  let { questions, userInput } = selectResult;
  let indexFilter;
  userInput = typeof userInput === 'string'
    ? JSON.parse(userInput)
    : userInput;
  questions = typeof questions === 'string'
    ? JSON.parse(questions)
    : questions;

  if (filteredValue !== 'all') {
    if (filteredValue === 'correct') {
      indexFilter = questions.map(
        (question, i) => (question.isCorrectAnswer ? i : -1)
      ).filter((index) => index !== -1);
      questions = questions.filter((question) => question.isCorrectAnswer);
    } else if (filteredValue === 'incorrect') {
      indexFilter = questions.map(
        (question, i) => (question.isIncorrectAnswer ? i : -1)
      ).filter((index) => index !== -1);
      questions = questions.filter((question) => question.isIncorrectAnswer);
    }

    userInput = userInput.filter(
      (_input, index) => indexFilter.indexOf(index) !== -1
    );
  }

  return questions.map((question, index) => {
    const userInputIndex = userInput[index];
    const {
      questionIndex,
      question: currentQuestion,
      questionPic
    } = question;

    return (
      <div className="result-answer-wrapper" key={`resultDetail${selectResult.id}Question${questionIndex}`}>
        <h3 dangerouslySetInnerHTML={rawMarkup(`Q${questionIndex}: ${currentQuestion}`)} />
        { questionPic && <img src={`${process.env.PUBLIC_URL}/assets/resources/${questionPic}`} alt="" /> }
        {renderTagsResult(question) }
        <div className="result-answer">
          { renderAnswerInResult(question, userInputIndex) }
        </div>
        {renderExplanation(question, true)}
      </div>
    );
  });
};

function getQuestionSummary(questions, correct, incorrect, userInput) {
  const {
    resultPoints,
    totalPoints,
    correctPoints,
    incorrectPoints
  } = pointsCalc(questions, correct, incorrect);

  const questionsSummary = questions.map((question, index) => ({
    ...question,
    isCorrectAnswer: correct.includes(index),
    isIncorrectAnswer: incorrect.includes(index),
    questionIndex: index + 1
  }));

  const questionSummary = {
    numberOfQuestions: questions.length,
    numberOfCorrectAnswers: correct.length,
    numberOfIncorrectAnswers: incorrect.length,
    questions: questionsSummary,
    userInput,
    resultPoints,
    totalPoints,
    correctPoints,
    incorrectPoints
  };
  return questionSummary;
}

export {
  renderAnswerInResult,
  pointsCalc,
  renderExplanation,
  shufflingQuestions,
  rawMarkup,
  disabledAll,
  disableButtons,
  renderTagsResult,
  renderQuizResultQuestions,
  getQuestionSummary
};
