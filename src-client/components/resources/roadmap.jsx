import React from 'react';
import PropTypes from 'prop-types';

import MetisMenu from 'react-metismenu';
import '../../css/roadmap.css';

import {
  parseChapters,
  scroll
} from './helper';

class Roadmap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: parseChapters(props.chapters),
      activeLinkTo: '/#'
    };
  }

  componentDidMount() {
    scroll(window.location.hash);
    this.setState({
      activeLinkTo: window.location.hash
    });
  }

  // eslint-disable-next-line react/no-deprecated
  componentWillReceiveProps() {
    this.forceUpdate();
    scroll(window.location.hash);
    this.setState({
      activeLinkTo: window.location.hash
    });
  }

  render() {
    const { content, activeLinkTo } = this.state;
    const { handleClick, store } = this.props;
    return (
      <div>
        <MetisMenu
          content={content}
          activeLinkTo={activeLinkTo}
          onSelected={(e) => {
            store.set('gameMode', false);
            handleClick(e.currentTarget.getAttribute('href').substr(1));
          }}
        />
      </div>
    );
  }
}

Roadmap.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  chapters: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  store: PropTypes.object.isRequired
};

export default Roadmap;
