import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Pagination from '@material-ui/lab/Pagination';
import Search from './search';
import API from '../../../api/api';
import defaultLocale from './locale';

class ClassesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: [],
      searchClass: '',
      page: 1,
    };
    this.fetchClasses = this.fetchClasses.bind(this);
    this.handleChangePage = this.handleChangePage.bind(this);
    this.onClickRemove = this.onClickRemove.bind(this);
    this.searchClass = this.searchClass.bind(this);
  }

  componentDidMount() {
    this.fetchClasses();
  }

  handleChangePage(_event, newPage) {
    this.setState({ page: newPage }, () => {
      this.fetchClasses();
    });
  }

  // eslint-disable-next-line class-methods-use-this
  onClickRemove({ id, title }) {
    // eslint-disable-next-line no-alert
    if (window.confirm(`Tem certeza que deseja apagar a disciplina (${title})?`)) {
      API.delete(`/api/classes/${id}`)
        .then(() => this.fetchClasses())
        .catch((error) => console.error(error));
    }
  }

  fetchClasses() {
    const { page, searchClass } = this.state;
    API.get(`/api/classes/all?page=${page}${searchClass ? `&classTitle=${searchClass}` : ''}`)
      .then(({ data: { search, totalPages } }) => this.setState({ classes: search, totalPages }))
      .catch((error) => console.error(error));
  }

  searchClass(res) {
    this.setState({ searchClass: res, page: 1 }, () => {
      this.fetchClasses();
    });
  }

  cardsHtml() {
    const { classes } = this.state;
    const { DescriptionTag, RegisterCodeTag } = defaultLocale;

    return classes.map(({
      id, title, description, registerCode
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
        <Card.Body>
          <Card.Text>
            <b>{`${DescriptionTag}: `}</b>
            {description}
          </Card.Text>
          <Card.Text>
            <b>{`${RegisterCodeTag}: `}</b>
            {registerCode}
          </Card.Text>
        </Card.Body>
      </Card>
    ));
  }

  render() {
    const { totalPages, page } = this.state;
    return (
      <div className="col">
        <Search searchText={this.searchClass} />
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

export default ClassesList;
