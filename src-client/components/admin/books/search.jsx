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
    const { searchText } = this.props;
    const { value } = e.target;
    this.setState({ inputText: value }, () => {
      const { inputText } = this.state;
      searchText(inputText);
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
            <label htmlFor="titleFilter">
              {FilterTag}
            </label>
            <input
              type="text"
              id="titleFilter"
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
  searchText: PropTypes.func.isRequired,
};

export default Search;
