import React, { Component } from 'react';
import PropTypes from 'prop-types';
import defaultLocale from './locale';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { searchEmail } = this.props;
    const { value } = e.target;
    this.setState({ inputText: value }, () => {
      const { inputText } = this.state;
      searchEmail(inputText);
    });
  }

  render() {
    const { FilterTag, FilterPlaceholderTag } = defaultLocale;

    return (
      <form className="Search" onSubmit={(e) => e.preventDefault()}>
        <div
          style={{
            maxWidth: '20rem',
            margin: 'auto'
          }}
        >
          <div className="form-group">
            <label htmlFor="emailFilter">
              {FilterTag}
            </label>
            <input
              type="text"
              id="emailFilter"
              className="form-control Search-box"
              placeholder={FilterPlaceholderTag}
              onChange={this.handleChange}
            />
          </div>
        </div>
      </form>
    );
  }
}

Search.propTypes = {
  searchEmail: PropTypes.func.isRequired,
};

export default Search;
