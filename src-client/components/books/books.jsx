import React from 'react';
import PropTypes from 'prop-types';

import Card from 'react-bootstrap/Card';
import { withTranslation } from 'react-i18next';

import API from '../../api/api';

class BooksTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { books: [] };
    this.fetchBooks = this.fetchBooks.bind(this);
    this.handleGoToChapter = this.handleGoToChapter.bind(this);
    this.mounted = false;
  }

  componentDidMount() {
    this.mounted = true;
    this.fetchBooks();
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  handleGoToChapter(bookId) {
    const { history } = this.props;
    history.push(`/bookId=${bookId}/chapters`);
  }

  handleGoToResources(bookId) {
    const { history } = this.props;
    history.push(`/bookId=${bookId}`);
  }

  handleGoToResults(bookId) {
    const { history } = this.props;
    history.push(`/bookId=${bookId}/results`);
  }

  fetchBooks() {
    API.get('/api/books/')
      .then(({ data }) => this.mounted
      && this.setState({ books: data }))
      .catch((error) => {
        console.error(error);
      });
  }

  cardHtml(item) {
    const { store } = this.props;
    const user = store.get('user');
    return (
      <Card
        key={item.id}
        style={{ width: '17rem', margin: '0.8rem' }}
      >
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
            {item.description}
          </Card.Text>
          <div style={{ display: 'grid' }}>
            {this.chaptersButton(item)}
            {this.resourcesButton(item)}
            {user && user.id && this.resultsButton(item)}
          </div>
        </Card.Body>
      </Card>
    );
  }

  resultsButton(item) {
    const { t } = this.props;
    return (
      <button
        type="button"
        className="btn btn-light btn-light-custom"
        onClick={() => this.handleGoToResults(item.id)}
      >
        {t('Results')}
      </button>
    );
  }

  resourcesButton(item) {
    const { t } = this.props;
    return (
      <button
        type="button"
        className="btn btn-light btn-light-custom"
        onClick={() => this.handleGoToResources(item.id)}
      >
        {t('Resources')}
      </button>
    );
  }

  chaptersButton(item) {
    const { t } = this.props;
    return (
      <button
        type="button"
        className="btn btn-light btn-light-custom"
        onClick={() => this.handleGoToChapter(item.id)}
      >
        {t('Chapters')}
      </button>
    );
  }

  render() {
    const { books } = this.state;
    const { t } = this.props;

    if (books.length === 0) {
      return (
        <div>
          <h1>
            {t('NoResults')}
          </h1>
        </div>
      );
    }

    return (
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
        {(books.map((item) => this.cardHtml(item)))}
      </div>
    );
  }
}

BooksTable.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  store: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired,
};

export default withTranslation(['general'])(BooksTable);
