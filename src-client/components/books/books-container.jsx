/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';

import Books from './books';

export default class BooksContainer extends Component {
  constructor(props) {
    super(props);
    this.BooksTable = React.createRef();
  }

  render() {
    return (
      <div className="col">
        <Books {...this.props} />
      </div>
    );
  }
}
