/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Select from 'react-select';
import API from '../../../api/api';
import defaultLocale from './locale';

class User extends Component {
  constructor(props) {
    super(props);
    const {
      id, firstName, lastName, role, email, photo = false
    } = this.props;
    this.state = {
      user: {
        id, firstName, lastName, role, email, photo
      }
    };
    this.changeRole = this.changeRole.bind(this);
    this.fetchClasses = this.fetchClasses.bind(this);
    this.changeClasses = this.changeClasses.bind(this);
    this.onClickRemove = this.onClickRemove.bind(this);
    this.mounted = false;
  }

  componentDidMount() {
    this.mounted = true;
    if (this.mounted) this.fetchClasses();
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  onClickRemove() {
    const { user: { id, firstName, lastName } } = this.state;
    const { refreshUsers } = this.props;
    // eslint-disable-next-line no-alert
    if (window.confirm(`Tem certeza que deseja apagar o utilizador (${firstName} ${lastName})?`)) {
      API.delete(`/api/users/${id}`)
        .then(() => refreshUsers())
        .catch((error) => console.error(error));
    }
  }

  fetchClasses() {
    const { user } = this.state;
    API.get(`/api/classes/user=${user.id}`)
      .then((res) => this.mounted && this.setState({ userClasses: res.data }))
      .catch((error) => console.error(error));
  }

  changeRole({ value }) {
    const { user } = this.state;
    user.role = value;
    API.put(`/api/users/${user.id}/role`, user)
      .then((res) => this.setState({ user: res.data }))
      .catch((error) => console.error(error));
  }

  changeClasses(selection) {
    const { userClasses, user } = this.state;
    if (!selection) {
      for (let index = 0; index < userClasses.length; index += 1) {
        const { id } = userClasses[index];
        API.delete(`api/class_users/classId=${id}&userId=${user.id}`)
          .then(() => this.fetchClasses());
      }
    } else {
      for (let index = 0; index < selection.length; index += 1) {
        const { value } = selection[index];
        if (!userClasses.some((x) => x.id === value)) {
          API.post('api/class_users/userId&classId', { classId: value, userId: user.id })
            .then(() => this.fetchClasses());
        }
      }

      for (let index = 0; index < userClasses.length; index += 1) {
        const { id } = userClasses[index];
        if (!selection.some((x) => x.value === id)) {
          API.delete(`api/class_users/classId=${id}&userId=${user.id}`)
            .then(() => this.fetchClasses());
        }
      }
    }
  }

  selectClassHtlm(userClasses) {
    const { ClassesTag } = defaultLocale;
    const { classes } = this.props;
    const userClassesOptions = userClasses.map((item) => ({ value: item.id, label: item.title }));
    const classesOptions = classes.map((item) => ({ value: item.id, label: item.title }));
    return (
      <div className="form-group">
        <label htmlFor="classes">
          {ClassesTag}
        </label>
        <Select
          onChange={this.changeClasses}
          defaultValue={userClassesOptions}
          isMulti
          name="colors"
          options={classesOptions}
          className="basic-multi-select"
          classNamePrefix="select"
        />
      </div>
    );
  }

  selectRoleHtml(role) {
    const roleOptions = [
      { value: 'teacher', label: 'Teacher' },
      { value: 'student', label: 'Student' }
    ];
    const { RoleTag } = defaultLocale;

    return (
      <div className="form-group">
        <label htmlFor="roles">
          {RoleTag}
        </label>
        <Select
          onChange={this.changeRole}
          isDisabled={(role === 'admin')}
          defaultValue={{ value: role, label: role.charAt(0).toUpperCase() + role.slice(1) }}
          options={roleOptions}
        />
      </div>
    );
  }

  render() {
    const {
      user: {
        firstName,
        lastName,
        role,
        email,
        photo = false
      },
      userClasses
    } = this.state;
    return (
      <Card key={email} style={{ width: '17rem', margin: '0.8rem' }}>
        <Card.Header>
          <Card.Title>
            {`${firstName} ${lastName}`}
            {' '}
            {role && role !== 'admin' && (
            <button type="button" className="remove" onClick={this.onClickRemove}>
              <i className="fas fa-trash" />
            </button>
            )}
          </Card.Title>
        </Card.Header>
        <Card.Body>

          <Card.Text>
            {email}
            {photo && (
            <img src={photo} alt="" />
            )}
          </Card.Text>
          {role && role !== 'admin' && userClasses && (this.selectClassHtlm(userClasses))}
        </Card.Body>
        <Card.Footer className="text-muted">
          {role && this.selectRoleHtml(role)}
        </Card.Footer>
      </Card>
    );
  }
}

User.defaultProps = {
  photo: false
};

User.propTypes = {
  id: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  photo: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.array.isRequired,
  refreshUsers: PropTypes.func.isRequired
};

export default User;
