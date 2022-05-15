import React, { Component } from 'react';
import Pagination from '@material-ui/lab/Pagination';
import User from './user';
import Search from './search';
import API from '../../../api/api';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      classes: [],
      searchEmail: '',
      page: 1,
    };
    this.searchEmail = this.searchEmail.bind(this);
    this.handleChangePage = this.handleChangePage.bind(this);
  }

  componentDidMount() {
    this.fetchClasses();
    this.fetchUsers();
  }

  handleChangePage(_event, newPage) {
    this.setState({ page: newPage }, () => {
      this.fetchUsers();
    });
  }

  fetchClasses() {
    API.get('/api/classes/all')
      .then(({ data: { search } }) => this.setState({ classes: search }))
      .catch((error) => console.error(error));
  }

  fetchUsers() {
    const { page, searchEmail } = this.state;
    API.get(`/api/users?page=${page}${searchEmail ? `&email=${searchEmail}` : ''}`)
      .then(({ data: { search, totalPages } }) => this.setState({ users: search, totalPages }))
      .catch((error) => console.error(error));
  }

  searchEmail(res) {
    this.setState({ searchEmail: res, page: 1 }, () => {
      this.fetchUsers();
    });
  }

  render() {
    const {
      users, classes, totalPages, page
    } = this.state;

    return (
      <div className="col">
        <Search searchEmail={this.searchEmail} />
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
          {
            users
              .map((user) => (
                <User
                  key={user.id}
                  id={user.id}
                  firstName={user.firstName}
                  lastName={user.lastName}
                  email={user.email}
                  photo={user.photo}
                  role={user.role}
                  classes={classes}
                  refreshUsers={this.fetchUsers}
                />
              ))
          }
        </div>
        <div className="row" style={{ margin: 'auto' }}>
          <Pagination count={totalPages} page={page} onChange={this.handleChangePage} />
        </div>
      </div>
    );
  }
}

export default UserList;
