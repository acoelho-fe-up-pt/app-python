import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CleanBuildCodeAnswersBtn = (props) => {
  const {
    cleanBuildCodeAnswers,
    appLocale: {
      cleanAnswersBtn
    }
  } = props;
  return (
    <Container>
      <Row>
        <Col xs>
          <button
            type="button"
            onClick={() => cleanBuildCodeAnswers(false)}
            className="nextQuestionBtn btn m-0"
          >
            {cleanAnswersBtn}
            linha
          </button>
        </Col>
        <Col xs>
          <button
            type="button"
            onClick={() => cleanBuildCodeAnswers(true)}
            className="nextQuestionBtn btn m-0"
          >
            {cleanAnswersBtn}
            {' '}
            1
          </button>
        </Col>
      </Row>
    </Container>
  );
};

CleanBuildCodeAnswersBtn.propTypes = {
  cleanBuildCodeAnswers: PropTypes.func.isRequired,
  appLocale: PropTypes.shape({
    cleanAnswersBtn: PropTypes.string.isRequired
  }).isRequired
};

export default CleanBuildCodeAnswersBtn;
