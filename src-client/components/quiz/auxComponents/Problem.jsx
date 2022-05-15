/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FillSpacesInputBtn from './FillSpacesInputBtn';
import SelectFixBugs from './SelectFixBugs';

const Problem = (props) => {
  const {
    isDisabled,
    onChangeFixBugs,
    currentQuestion: {
      problem, inputs, answers, questionType
    },
    currentQuestionUserInput
  } = props;

  if (currentQuestionUserInput && questionType === 'buildCode') {
    const items = [];
    for (let index = 0; index < currentQuestionUserInput.length + 1; index += 1) {
      items.push(
        <Row
          key={index}
          style={{
            minWidth: '2.5rem',
            minHeight: '2.5rem',
            height: 'auto',
            margin: '0 4px',
            backgroundColor: '#151515',
            color: 'white'
          }}
        >
          {currentQuestionUserInput[index]
          && currentQuestionUserInput[index].map((element) => `${answers[element - 1]} `)}
        </Row>
      );
    }
    return (
      <div>
        {items}
      </div>
    );
  }

  let cnt = 0;
  return (
    <Container className="problem-section">
      {problem.map((line, index) => {
        const dataSliped = line.split(/{{(input\d)}}/).filter((el) => el !== '');
        return (
          <Row key={`line${index}`} style={{ textAlign: 'left' }}>
            {dataSliped.map((element, index2) => {
              if (element.includes('input') && element.length <= 8) {
                cnt += 1;

                if (questionType === 'fixBugs') {
                  return (
                    <Col xs="auto" key={cnt}>
                      <SelectFixBugs
                        key={cnt}
                        isDisabled={isDisabled}
                        index={cnt}
                        inputs={inputs[`input${cnt}`]}
                        onChangeFixBugs={onChangeFixBugs}
                      />
                    </Col>
                  );
                } if (questionType === 'fillSpaces') {
                  return (
                    <Col xs="auto" key={cnt}>
                      <FillSpacesInputBtn
                        key={cnt}
                        index={cnt}
                        answers={answers}
                        currentQuestionUserInput={currentQuestionUserInput}
                        isDisabled={isDisabled}
                      />
                    </Col>
                  );
                }
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
};

Problem.propTypes = {
  isDisabled: PropTypes.bool.isRequired,
  onChangeFixBugs: PropTypes.func.isRequired,
  currentQuestion: PropTypes.shape({
    problem: PropTypes.any,
    inputs: PropTypes.any,
    answers: PropTypes.any,
    questionType: PropTypes.any
  }).isRequired,
  currentQuestionUserInput: PropTypes.arrayOf(PropTypes.any).isRequired
};

export default Problem;
