import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import { withTranslation } from 'react-i18next';
import API from '../../api/api';

class NumberOfStudents extends Component {
  constructor(props) {
    super(props);
    this.state = { numberofstudents: '', loading: true };
    this.fetchMyTotalStudents = this.fetchMyTotalStudents.bind(this);
    this.fetchMyTotalStudents();
  }

  fetchMyTotalStudents() {
    const { classObject } = this.props;
    const url = `/api/classes/students/classId=${classObject.id}`;
    API.get(url)
      .then(({ data: { numberofstudents } }) => this.setState({ numberofstudents, loading: false }))
      .catch((error) => console.error(error));
  }

  render() {
    const { numberofstudents, loading } = this.state;
    const { t } = this.props;
    return (
      <Card.Footer className="text-muted">
        {loading && (
          <Spinner animation="border" size="sm" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}
        {!loading && (
        <span>
          {`${numberofstudents} ${t('StudentsTag')}`}
        </span>
        )}
      </Card.Footer>
    );
  }
}

NumberOfStudents.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classObject: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired,
};

export default withTranslation(['classes'])(NumberOfStudents);
