/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';

import Classes from './classes';
import JoinClass from './join-class';
import API from '../../api/api';

export default class ChaptersContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { classes: [] };
    this.fetchClasses = this.fetchClasses.bind(this);
    this.fetchClasses();
  }

  fetchClasses() {
    API.get('/api/classes/')
      .then(({ data }) => this.setState({ classes: data }))
      .catch((error) => console.error(error));
  }

  render() {
    const { classes } = this.state;
    return (
      <div className="col">
        <JoinClass refreshClasses={this.fetchClasses} />
        <Classes {...this.props} classes={classes} />
      </div>
    );
  }
}
