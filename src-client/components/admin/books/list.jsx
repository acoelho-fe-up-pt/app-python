import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Pagination from '@material-ui/lab/Pagination';
import Search from './search';
import API from '../../../api/api';

class BooksList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchBooks: '',
      page: 1,
    };
    this.fetchBooks = this.fetchBooks.bind(this);
    this.handleChangePage = this.handleChangePage.bind(this);
    this.onClickRemove = this.onClickRemove.bind(this);
    this.searchBooks = this.searchBooks.bind(this);
  }

  componentDidMount() {
    this.fetchBooks();
  }

  handleChangePage(_event, newPage) {
    this.setState({ page: newPage }, () => {
      this.fetchBooks();
    });
  }

  // eslint-disable-next-line class-methods-use-this
  onClickRemove({ id, title }) {
    // eslint-disable-next-line no-alert
    if (window.confirm(`Tem certeza que deseja apagar o livro (${title})?`)) {
      API.delete(`/api/books/${id}`)
        .then(() => this.fetchBooks())
        .catch((error) => console.error(error));
    }
  }

  fetchBooks() {
    const { page, searchBooks } = this.state;
    API.get(`/api/books/all?page=${page}${searchBooks ? `&bookTitle=${searchBooks}` : ''}`)
      .then(({ data: { search, totalPages } }) => this.setState({ books: search, totalPages }))
      .catch((error) => console.error(error));
  }

  searchBooks(res) {
    this.setState({ searchBooks: res, page: 1 }, () => {
      this.fetchBooks();
    });
  }

  cardsHtml() {
    const { books } = this.state;
    return books.map(({
      id, title
    }) => (
      <Card key={id} style={{ width: '17rem', margin: '0.8rem' }}>
        <Card.Header>
          <Card.Title>
            {title}
            <button
              type="button"
              className="remove"
              onClick={() => this.onClickRemove({
                id, title
              })}
            >
              <i className="fas fa-trash" />
            </button>
          </Card.Title>
        </Card.Header>
      </Card>
    ));
  }

  render() {
    const { totalPages, page } = this.state;
    return (
      <div className="col">
        <Search searchText={this.searchBooks} />
        <div
          className="row"
          style={{
            margin: 'auto',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            overflowY: 'auto',
            maxHeight: '60vh'
          }}
        >
          { this.cardsHtml() }
        </div>
        <div className="row" style={{ margin: 'auto' }}>
          <Pagination count={totalPages} page={page} onChange={this.handleChangePage} />
        </div>
      </div>
    );
  }
}

export default BooksList;
