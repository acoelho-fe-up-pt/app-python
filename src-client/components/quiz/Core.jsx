/* eslint-disable max-len */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable react/no-danger */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable consistent-return */
/* eslint-disable react/sort-comp */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QuizResult from './auxComponents/QuizResult';
import NextQuestionBtn from './auxComponents/NextQuestionBtn';
import SubmitAnswerBtn from './auxComponents/SubmitAnswerBtn';
import CleanFillSpacesAnswersBtn from './auxComponents/CleanFillSpacesAnswersBtn';
import CleanBuildCodeAnswersBtn from './auxComponents/CleanBuildCodeAnswersBtn';
import Answers from './auxComponents/Answers';
import Tags from './auxComponents/Tags';
import {
  renderExplanation,
  rawMarkup,
  disabledAll,
  disableButtons,
  getQuestionSummary
} from './auxiliar';
import Problem from './auxComponents/Problem';

import multipleChoiceHelper from './helper/multipleChoice';
import fixBugsHelper from './helper/fixBugs';
import fillSpacesHelper from './helper/fillSpaces';
import buildCodeHelper from './helper/buildCode';
import CountdownTimer from './CountdownTimer';
import API from '../../api/api';

const questionHelper = {
  multipleChoiceHelper,
  fixBugsHelper,
  fillSpacesHelper,
  buildCodeHelper
};

class Core extends Component {
  constructor(props) {
    super(props);
    const { countdownTimer } = this.props;
    this.state = {
      incorrectAnswer: false,
      correctAnswer: false,
      showNextQuestionButton: false,
      endQuiz: false,
      currentQuestionIndex: 0,
      buttons: {},
      correct: [],
      incorrect: [],
      userInput: [],
      countdownTimer: countdownTimer || false,
      questionSummary: false
    };
    this.nextQuestion = this.nextQuestion.bind(this);

    this.evaluateAnswer = this.evaluateAnswer.bind(this);

    // FixBugs
    this.onChangeFixBugs = this.onChangeFixBugs.bind(this);
    // FillSpaces
    this.registerFillSpacesAnswer = this.registerFillSpacesAnswer.bind(this);
    this.cleanFillSpacesAnswers = this.cleanFillSpacesAnswers.bind(this);
    // BuildCode
    this.registerBuildCodeAnswer = this.registerBuildCodeAnswer.bind(this);
    this.cleanBuildCodeAnswers = this.cleanBuildCodeAnswers.bind(this);

    this.checkMultipleChoiceAnswer = this.checkMultipleChoiceAnswer.bind(this);
    this.tick = this.tick.bind(this);
    this.onEndTime = this.onEndTime.bind(this);
    this.handlePoints = this.handlePoints.bind(this);
  }

  componentDidMount() {
    this.beginCountdownTimer();
  }

  beginCountdownTimer() {
    this.timer = setInterval(this.tick, 1000);
  }

  stopCountdownTimer() {
    clearInterval(this.timer);
  }

  handlePoints() {
    const {
      entryResource: { id: resourceId, chapter_id: resourceChapterId },
      handlePoints,
      store,
      params,
      questions
    } = this.props;
    const {
      correct, incorrect, userInput
    } = this.state;

    const questionSummary = getQuestionSummary(questions, correct, incorrect, userInput);

    const user = store.get('user');
    if (user && user.id && resourceId) {
      let baseUrl = '/api/';
      const requestId = {};

      if (params.bookId) {
        baseUrl += 'book_points';
        requestId.book_id = params.bookId;
      } else if (params.classId) {
        baseUrl += 'class_points';
        requestId.class_id = params.classId;
      }

      console.log('Updating points');
      API.post(baseUrl, {
        ...questionSummary,
        ...requestId,
        resource_id: resourceId
      })
        .then(({ data }) => handlePoints({ resourceId, resourceChapterId, points: data }))
        .catch((error) => console.error(error));
    }
    this.setState({ questionSummary });
  }

  manageLevel() {
    const {
      correctAnswer, incorrectAnswer, currentQuestionIndex
    } = this.state;

    if (!correctAnswer && incorrectAnswer) {
      const { level } = this.getCurrentQuestion();
      const { questions, alternativeQuestions } = this.props;

      if (currentQuestionIndex + 1 < questions.length) {
        console.info(`With incorrect answer you stay on the same level (${level})`);
        const levelQuestion = alternativeQuestions.find(
          (alternativeQuestion) => alternativeQuestion.level === level
        );
        if (levelQuestion) {
          questions.splice(currentQuestionIndex + 1, 0, levelQuestion);
          questions.pop();
          const index = alternativeQuestions.indexOf(levelQuestion);
          if (index > -1) {
            alternativeQuestions.splice(index, 1);
          }
        } else {
          console.warn(`Couldn't find question of same level (${level})`);
        }
      }
    }
  }

  // ####################
  // ## MultipleChoice ##
  // ####################

  checkMultipleChoiceAnswer(index, correctAnswer, answerSelectionType) {
    this.registerMultipleChoiceAnswer(index);
    const { singleAnswerButtons, multipleAnswerButtons } = multipleChoiceHelper;

    if (answerSelectionType === 'single') {
      this.evaluateAnswer();
      this.setState((prevState) => singleAnswerButtons(index, correctAnswer, prevState));
    } else {
      const { currentQuestionIndex } = this.state;
      const { userInput } = this.state;
      const maxNumberOfMultipleSelection = correctAnswer.length;
      if (userInput[currentQuestionIndex].length === maxNumberOfMultipleSelection) {
        this.evaluateAnswer();
      }
      this.setState((prevState) => multipleAnswerButtons(index, correctAnswer, prevState));
    }
  }

  registerMultipleChoiceAnswer(index) {
    const { currentQuestionIndex, userInput, submitAnswerButton } = this.state;
    const { correctAnswer } = this.getCurrentQuestion();
    const maxInput = Array.isArray(correctAnswer) ? correctAnswer.length : 1;
    if (!submitAnswerButton) {
      const { processUserInput } = multipleChoiceHelper;
      this.setState({
        userInput: processUserInput(index, userInput, currentQuestionIndex, maxInput)
      });
    }
  }

  // ################
  // ## FillSpaces ##
  // ################

  registerFillSpacesAnswer(index) {
    const { currentQuestionIndex, userInput, submitAnswerButton } = this.state;
    const { correctAnswer } = this.getCurrentQuestion();
    const maxInput = correctAnswer.length;
    if (!submitAnswerButton) {
      const { processUserInput } = fillSpacesHelper;
      this.setState({
        userInput: processUserInput(index, userInput, currentQuestionIndex, maxInput)
      });
    }
  }

  cleanFillSpacesAnswers(onlyLastAnswer) {
    const { currentQuestionIndex, userInput, submitAnswerButton } = this.state;
    if (!submitAnswerButton) {
      this.setState({
        userInput: fillSpacesHelper.cleanUserInput(userInput, currentQuestionIndex, onlyLastAnswer)
      });
    }
  }

  // #############
  // ## FixBugs ##
  // #############

  registerFixBugsAnswer(input, index) {
    const { currentQuestionIndex, userInput, submitAnswerButton } = this.state;
    if (!submitAnswerButton) {
      const { processUserInput } = fixBugsHelper;
      this.setState({
        userInput: processUserInput(input, index, userInput, currentQuestionIndex)
      });
    }
  }

  // ################
  // ## BuildCode ##
  // ################

  registerBuildCodeAnswer(index) {
    const { currentQuestionIndex, userInput, submitAnswerButton } = this.state;
    const { correctAnswer, answers } = this.getCurrentQuestion();
    const lengths = correctAnswer.map((elm) => elm.length);
    const maxInput = Math.max(...lengths);
    const { processUserInput } = buildCodeHelper;
    if (!submitAnswerButton) {
      this.setState({
        userInput: processUserInput(index, userInput, currentQuestionIndex, maxInput, answers)
      });
    }
  }

  cleanBuildCodeAnswers(onlyLastAnswer) {
    const { currentQuestionIndex, userInput, submitAnswerButton } = this.state;
    if (!submitAnswerButton) {
      this.setState({ userInput: buildCodeHelper.cleanUserInput(userInput, currentQuestionIndex, onlyLastAnswer) });
    }
  }

  // ####################
  // ## Evaluation ##
  // ####################

  evaluateAnswer() {
    const currentQuestion = this.getCurrentQuestion();
    const { currentQuestionIndex, userInput } = this.state;
    const { correctAnswer, questionType } = currentQuestion;
    if (['multipleChoice', 'fillSpaces', 'fixBugs', 'buildCode'].includes(questionType)) {
      let isCorrect;
      if (questionType === 'multipleChoice') {
        const { answerSelectionType } = currentQuestion;
        if (['multiple', 'single'].includes(answerSelectionType)) {
          const answerSelectionTypeCapitalized = answerSelectionType.charAt(0).toUpperCase()
           + answerSelectionType.slice(1);
          isCorrect = questionHelper[`${questionType}Helper`][`isCorrectUserInput${answerSelectionTypeCapitalized}`](currentQuestionIndex, userInput, correctAnswer);
        }
      } else {
        isCorrect = questionHelper[`${questionType}Helper`].isCorrectUserInput(currentQuestionIndex, userInput, correctAnswer);
      }
      this.setQuestionEvaluation(isCorrect);
    }
  }

  setQuestionEvaluation(isCorrect) {
    const { correct, incorrect, currentQuestionIndex } = this.state;
    const currentQuestion = this.getCurrentQuestion();
    const { answers } = currentQuestion;
    renderExplanation(currentQuestion, false, isCorrect);

    if (isCorrect) {
      if (correct.indexOf(currentQuestionIndex) < 0) correct.push(currentQuestionIndex);
    } else if (incorrect.indexOf(currentQuestionIndex) < 0) incorrect.push(currentQuestionIndex);

    this.setState((prevState) => {
      const { buttons } = prevState;
      return {
        buttons: disableButtons(answers, buttons),
        incorrectAnswer: !isCorrect,
        correctAnswer: isCorrect,
        correct,
        incorrect,
        showNextQuestionButton: true
      };
    });
  }

  nextQuestion() {
    const { currentQuestionIndex, userInput } = this.state;
    const { questions, store } = this.props;

    if (userInput[currentQuestionIndex] === undefined) {
      userInput[currentQuestionIndex] = [];
    }

    this.beginCountdownTimer();

    const initState = {
      startTime: true,
      incorrectAnswer: false,
      correctAnswer: false,
      showNextQuestionButton: false,
      buttons: {},
      userInput
    };

    if (currentQuestionIndex + 1 === questions.length) {
      this.setState({
        ...initState,
        endQuiz: true
      });
      store.set('gameMode', false);
      this.handlePoints();
    } else {
      const { time } = questions[currentQuestionIndex + 1];
      const countdownTimer = time || false;
      this.setState({
        ...initState,
        currentQuestionIndex: currentQuestionIndex + 1,
        countdownTimer
      });
    }
  }

  onChangeFixBugs({ input, index }) {
    this.registerFixBugsAnswer(input, index);
  }

  getCurrentQuestion() {
    const { currentQuestionIndex } = this.state;
    const { questions } = this.props;
    return questions[currentQuestionIndex];
  }

  getCurrentQuestionUserInput() {
    const { currentQuestionIndex, userInput } = this.state;
    return userInput[currentQuestionIndex] || [];
  }

  onEndTime() {
    const {
      userInput,
      currentQuestionIndex,
      incorrect
    } = this.state;
    userInput.push(null);
    incorrect.push(currentQuestionIndex);

    const buttonJson = {
      disabled: true
    };

    this.setState({
      buttons: {
        0: buttonJson,
        1: buttonJson,
        2: buttonJson,
        3: buttonJson,
        disabledAll
      },
      incorrectAnswer: true,
      correctAnswer: false,
      showNextQuestionButton: true
    });
  }

  tick() {
    const { countdownTimer } = this.state;

    if (countdownTimer === 0) {
      this.onEndTime();
    } else {
      this.setState({ countdownTimer: countdownTimer - 1 });
    }
  }

  renderQuestionNumber() {
    const { currentQuestionIndex } = this.state;
    const { appLocale: { question }, questions } = this.props;

    return (
      <div>
        <span>
          {`${question} ${currentQuestionIndex + 1}`}
        </span>
        <span style={{ fontSize: 'smaller' }}>
          {`/${questions.length}`}
        </span>
      </div>
    );
  }

  renderTags(question, index) {
    const { appLocale } = this.props;
    const { endQuiz } = this.state;
    let { correctAnswer, incorrectAnswer } = this.state;

    if (typeof index !== 'undefined') {
      const { correct, incorrect } = this.state;
      correctAnswer = correct.includes(index);
      incorrectAnswer = incorrect.includes(index);
    }

    return (
      <Tags
        question={question}
        appLocale={appLocale}
        correctAnswer={correctAnswer}
        incorrectAnswer={incorrectAnswer}
        endQuiz={endQuiz}
      />
    );
  }

  renderProblem() {
    const { correctAnswer, incorrectAnswer, showNextQuestionButton } = this.state;
    const currentQuestion = this.getCurrentQuestion();
    const currentQuestionUserInput = this.getCurrentQuestionUserInput();
    return (
      <Problem
        isDisabled={incorrectAnswer || correctAnswer || showNextQuestionButton}
        onChangeFixBugs={this.onChangeFixBugs}
        currentQuestion={currentQuestion}
        currentQuestionUserInput={currentQuestionUserInput}
      />
    );
  }

  renderAnswers(question, buttons) {
    const { answers } = question;
    return (answers && (
    <Answers
      buttons={buttons}
      registerBuildCodeAnswer={this.registerBuildCodeAnswer}
      registerFillSpacesAnswer={this.registerFillSpacesAnswer}
      checkMultipleChoiceAnswer={this.checkMultipleChoiceAnswer}
      question={question}
    />
    ));
  }

  renderCleanAnswers(questionType) {
    const { appLocale } = this.props;
    if (questionType === 'fillSpaces') {
      return (
        <CleanFillSpacesAnswersBtn
          cleanFillSpacesAnswers={this.cleanFillSpacesAnswers}
          appLocale={appLocale}
        />
      );
    }
    if (questionType === 'buildCode') {
      return (
        <CleanBuildCodeAnswersBtn
          cleanBuildCodeAnswers={this.cleanBuildCodeAnswers}
          appLocale={appLocale}
        />
      );
    }
    return (<h1>TO do clean</h1>);
  }

  renderSubmitAnswer() {
    const { appLocale } = this.props;
    return (
      <SubmitAnswerBtn
        evaluateAnswer={() => this.evaluateAnswer()}
        appLocale={appLocale}
      />
    );
  }

  nextQuestionButton() {
    const { appLocale } = this.props;
    this.manageLevel();
    return (<NextQuestionBtn nextQuestion={this.nextQuestion} appLocale={appLocale} />);
  }

  showResult() {
    const { questionSummary } = this.state;
    const { reStart } = this.props;

    this.stopCountdownTimer();

    return (
      <div>
        <button
          id="gameModeBtn"
          type="button"
          onClick={reStart}
          className="btn btn-light btn-light-custom"
          style={{ margin: '0 auto' }}
        >
          <i className="fas fa-arrow-left" />
          {'  '}
          Tentar de novo
        </button>
        <QuizResult
          result={questionSummary}
        />
      </div>
    );
  }

  showQuiz() {
    const { questions } = this.props;
    const {
      buttons,
      showNextQuestionButton,
      currentQuestionIndex,
      countdownTimer
    } = this.state;

    const currentQuestion = questions[currentQuestionIndex];
    const {
      question, questionPic, questionType, time, problem
    } = currentQuestion;

    const { correctAnswer, incorrectAnswer } = this.state;
    const isToStop = incorrectAnswer || correctAnswer || showNextQuestionButton;
    if (isToStop) {
      this.stopCountdownTimer();
    }

    return (
      <div className="questionWrapperBody">
        {this.renderQuestionNumber()}
        {this.renderTags(currentQuestion)}
        {question && <h5 dangerouslySetInnerHTML={rawMarkup(question)} />}
        {questionPic && <img src={`${process.env.PUBLIC_URL}/assets/resources/${questionPic}`} />}
        {questionType !== 'multipleChoice' && this.renderProblem()}
        {countdownTimer && <CountdownTimer time={countdownTimer} />}
        {this.renderAnswers(currentQuestion, buttons)}
        {!showNextQuestionButton && ['fillSpaces', 'buildCode'].includes(questionType) && this.renderCleanAnswers(questionType)}
        {!showNextQuestionButton && questionType !== 'multipleChoice' && this.renderSubmitAnswer() }
        {showNextQuestionButton && this.nextQuestionButton()}
      </div>
    );
  }

  render() {
    const { endQuiz, questionSummary } = this.state;
    const { questions } = this.props;

    return (
      <div className="questionWrapper">
        {!endQuiz && this.showQuiz()}
        {endQuiz && questionSummary && this.showResult()}
      </div>
    );
  }
}

Core.propTypes = {
  questions: PropTypes.array,
  appLocale: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  entryResource: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  store: PropTypes.object.isRequired,
  handlePoints: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  params: PropTypes.object.isRequired
};

export default Core;
