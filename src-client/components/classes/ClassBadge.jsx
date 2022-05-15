import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-bootstrap/Spinner';

import API from '../../api/api';

class ClassBadge extends Component {
  constructor(props) {
    super(props);
    this.state = { points: '', loading: true };
    this.fetchMyTotalPoints = this.fetchMyTotalPoints.bind(this);
    this.mounted = false;
  }

  componentDidMount() {
    this.mounted = true;
    this.fetchMyTotalPoints();
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  fetchMyTotalPoints() {
    const { classObject } = this.props;
    const url = `/api/class_points/myTotalPoints/classId=${classObject.id}`;
    API.get(url)
      .then(({ data: { resultPoints } }) => this.mounted
      && this.setState({
        points: resultPoints,
        loading: false
      }))
      .catch((error) => console.error(error));
  }

  render() {
    const { points, loading } = this.state;
    return (
      <span>
        {' '}
        <span className="badge badge-primary">
          {loading && (
          <Spinner animation="border" size="sm" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
          )}
          {!loading && (
            <span>
              {points}
            </span>
          )}
        </span>
      </span>

    );
  }
}

ClassBadge.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classObject: PropTypes.object.isRequired,
};

export default ClassBadge;
