/* eslint-disable react/no-danger */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import quizLocale from '../Locale';
import '../../../css/quiz.css';
import { renderQuizResultQuestions } from '../auxiliar';
import ResultFilter from './ResultFilter';

class QuizResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredValue: 'all',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ filteredValue: event.target.value });
  }

  render() {
    const { result } = this.props;
    const { filteredValue } = this.state;
    const {
      numberOfCorrectAnswers,
      numberOfQuestions,
      resultPoints,
      totalPoints
    } = result;
    const {
      resultPageHeaderText,
      resultPagePoint,
      resultFilterAll,
      resultFilterCorrect,
      resultFilterIncorrect
    } = quizLocale;
    return (
      <div className="quiz-container">
        <h2>
          {resultPageHeaderText.replace('<correctIndexLength>', numberOfCorrectAnswers).replace('<questionLength>', numberOfQuestions)}
        </h2>
        <h2>
          {resultPagePoint.replace('<resultPoints>', resultPoints).replace('<totalPoints>', totalPoints)}
        </h2>
        <br />
        <ResultFilter
          filteredValue={filteredValue}
          handleChange={this.handleChange}
          appLocale={{
            resultFilterAll,
            resultFilterCorrect,
            resultFilterIncorrect
          }}
        />
        <br />
        {renderQuizResultQuestions(result, filteredValue)}
      </div>
    );
  }
}

QuizResult.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  result: PropTypes.object.isRequired,
};

export default QuizResult;
