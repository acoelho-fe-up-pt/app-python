import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CleanFillSpacesAnswersBtn = (props) => {
  const {
    cleanFillSpacesAnswers,
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
            onClick={() => cleanFillSpacesAnswers(false)}
            className="nextQuestionBtn btn m-0"
          >
            {cleanAnswersBtn}
          </button>
        </Col>
        <Col xs>
          <button
            type="button"
            onClick={() => cleanFillSpacesAnswers(true)}
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

CleanFillSpacesAnswersBtn.propTypes = {
  cleanFillSpacesAnswers: PropTypes.func.isRequired,
  appLocale: PropTypes.shape({
    cleanAnswersBtn: PropTypes.string.isRequired
  }).isRequired
};

export default CleanFillSpacesAnswersBtn;
