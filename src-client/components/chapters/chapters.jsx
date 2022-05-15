import React from 'react';
import PropTypes from 'prop-types';

import Card from 'react-bootstrap/Card';
import defaultLocale from './locale';

import API from '../../api/api';

class ChaptersTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      baseUrl: this.getBaseUrl(),
      chapters: [],
      todoChapters: [],
      filteredValue: 'all',
      loading: true
    };
    this.fetchChapters = this.fetchChapters.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.mounted = false;
  }

  componentDidMount() {
    this.mounted = true;
    const { store } = this.props;
    const user = store.get('user');
    if (user && user.id) {
      this.fetchChapters('todo');
    }
    this.fetchChapters();
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  handleGoToResources(chapterId) {
    const { history } = this.props;
    const { location } = history;
    const { pathname } = location;
    history.push(pathname.replace('chapters', `chapterId=${chapterId}/resources`));
  }

  handleChange(event) {
    this.setState({
      loading: true,
      filteredValue: event.target.value,
    });

    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 500);
  }

  getBaseUrl() {
    const { match } = this.props;
    const { params } = match;
    const baseUrl = '/api/chapters';

    if (params.bookId) {
      return `${baseUrl}/bookId=${params.bookId}`;
    } if (params.classId) {
      return `${baseUrl}/classId=${params.classId}`;
    }

    return 'ERRRO';
  }

  fetchChapters(filteredValue = 'all') {
    let { baseUrl } = this.state;

    if (filteredValue !== 'all') {
      baseUrl += `/${filteredValue}`;
    }

    API.get(baseUrl)
      .then(({ data }) => {
        if (this.mounted) {
          if (filteredValue === 'all') {
            this.setState({
              chapters: data,
              loading: false
            });
          } else if (filteredValue === 'todo') {
            this.setState({ todoChapters: data });
          }
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  filterSelect() {
    const { filteredValue } = this.state;
    const {
      FilterAllTag,
      FilterTodoTag,
      FilterDoneTag
    } = defaultLocale;

    return (
      <div className="quiz-result-filter">
        <select value={filteredValue} onChange={this.handleChange}>
          <option value="all">{FilterAllTag}</option>
          <option value="todo">{FilterTodoTag}</option>
          <option value="done">{FilterDoneTag}</option>
        </select>
      </div>
    );
  }

  cardHtml(item) {
    return (
      <Card key={item.id} style={{ width: '17rem', margin: '0.8rem' }}>
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
            {item.description}
          </Card.Text>
          <div style={{ display: 'grid' }}>
            {this.resourcesButton(item)}
          </div>
        </Card.Body>
      </Card>
    );
  }

  resourcesButton(item) {
    return (
      <button
        type="button"
        className="btn btn-light btn-light-custom"
        onClick={() => this.handleGoToResources(item.id)}
      >
        {defaultLocale.ResourcesTag}
      </button>
    );
  }

  messageNotFound() {
    const { filteredValue } = this.state;
    const { chapters } = this.state;
    const {
      TodoNotFound,
      DoneNotFound,
      AllNotFound
    } = defaultLocale;

    if (chapters.length === 0) {
      return (<h1>{AllNotFound}</h1>);
    }
    if (filteredValue === 'todo') {
      return (<h1>{TodoNotFound}</h1>);
    }
    if (filteredValue === 'done') {
      return (<h1>{DoneNotFound}</h1>);
    }
    return (<h1>{AllNotFound}</h1>);
  }

  render() {
    const {
      todoChapters,
      loading,
      filteredValue
    } = this.state;
    let {
      chapters
    } = this.state;
    const { store } = this.props;
    const user = store.get('user');

    if (filteredValue === 'todo') {
      chapters = todoChapters;
    } else if (filteredValue === 'done') {
      chapters = chapters.filter(
        (chapter) => !todoChapters.some(
          (todoChapter) => todoChapter.id === chapter.id
        )
      );
    }

    return (
      <div className="col">
        {user && user.id && this.filterSelect()}
        <div
          className="row"
          style={{
            margin: 'auto',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            overflowY: 'auto',
            maxHeight: '80vh'
          }}
        >
          {loading && <h1>Loading</h1>}
          {!loading && (chapters.map((item) => this.cardHtml(item)))}
          {!loading && chapters.length === 0 && (this.messageNotFound())}
        </div>
      </div>
    );
  }
}

ChaptersTable.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object.isRequired,
  // eslint-disable-next-line react/require-default-props
  match: PropTypes.shape({
    params: PropTypes.shape({
      classId: PropTypes.string,
      bookId: PropTypes.string
    })
  }),
  // eslint-disable-next-line react/forbid-prop-types
  store: PropTypes.object.isRequired,
};

export default ChaptersTable;
