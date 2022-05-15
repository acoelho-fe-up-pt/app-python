import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Core from './Core';
import quizValidator from './helper/validator';
import { shufflingQuestions } from './auxiliar';
import defaultLocale from './Locale';
import '../../css/quiz.css';

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: false,
      questions: [],
      alternativeQuestions: []
    };
    this.start = this.start.bind(this);
    this.shuffle = this.shuffle.bind(this);
    this.reStart = this.reStart.bind(this);
  }

  start() {
    const { store } = this.props;
    this.shuffle();
    store.set('gameMode', true);
    this.setState({ start: true });
  }

  reStart() {
    this.setState({ start: false });
  }

  shuffle() {
    const {
      quiz: { nQuestion, questions },
    } = this.props;
    const { start } = this.state;
    if (!start) {
      const { shuffledQuestions, alternativeQuestions } = shufflingQuestions(nQuestion, questions);
      this.setState({ alternativeQuestions, questions: shuffledQuestions });
    }
  }

  startMenu(appLocale) {
    const {
      quiz: {
        title, description, nQuestion, questions
      }
    } = this.props;
    const { landingHeaderText, startBtn } = appLocale;
    return (
      <div>
        <h2>{title}</h2>
        <div>
          {landingHeaderText.replace('<questionLength>', Math.min(questions.length, nQuestion))}
        </div>
        {description
          && (
            <div className="quiz-synopsis">
              {description}
            </div>
          )}
        <div className="startQuizWrapper">
          <button
            type="button"
            onClick={() => this.start()}
            className="btn btn-light btn-light-custom"
          >
            {startBtn}
          </button>
        </div>
      </div>
    );
  }

  render() {
    const {
      quiz,
      entryResource,
      store,
      params,
      handlePoints
    } = this.props;
    const {
      start,
      alternativeQuestions
    } = this.state;
    let {
      questions
    } = this.state;

    const {
      defaultMessageForCorrectAnswer,
      defaultMessageForIncorrectAnswer
    } = quiz;

    if (!quizValidator(quiz)) {
      return (null);
    }

    const appLocale = {
      ...defaultLocale,
      ...quiz.appLocale,
      ...{
        defaultMessageForCorrectAnswer,
        defaultMessageForIncorrectAnswer
      }
    };

    questions = questions.map((question, index) => ({
      ...question,
      questionIndex: index + 1
    }));

    return (
      <div className="quiz-container">
        {!start && this.startMenu(appLocale)}
        {
          start
          && (
          <Core
            key={entryResource.code}
            questions={questions}
            countdownTimer={questions[0].time}
            alternativeQuestions={alternativeQuestions}
            appLocale={appLocale}
            entryResource={entryResource}
            store={store}
            params={params}
            handlePoints={handlePoints}
            reStart={this.reStart}
          />
          )
        }
      </div>
    );
  }
}

Quiz.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  quiz: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  entryResource: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  store: PropTypes.object.isRequired,
  handlePoints: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  params: PropTypes.object.isRequired
};

export default Quiz;
