import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { notify } from '../shared/notification';
import API from '../../api/api';
import { withStore } from '../../store';

import defaultLocale from './locale';

const errorClass = (error) => (error ? 'is-invalid' : '');
const updateUserRoute = 'auth/register';

class UserProfile extends Component {
  constructor(props) {
    const {
      store: {
        user: {
          email, firstName, lastName, photo
        }
      }
    } = props;

    const defaults = {
      email, firstName, lastName, photo, password: '', password2: ''
    };

    super(props);
    this.state = { user: defaults, formErrors: { } };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { user, formErrors } = this.state;
    const { store } = this.props;

    Object.keys(user).forEach((field) => this.validateField(field));
    const hasErrors = Object.values(formErrors).filter((e) => e).length;

    if (!user || hasErrors) return;
    API.put(updateUserRoute, user)
      .then(({ data }) => {
        this.setState({ error: null });
        store.set('user', data.user);
        localStorage.setItem('token', data.token);
        notify({
          title: defaultLocale.SucessNotifyTitle,
          message: defaultLocale.SucessNotifyMessage,
          type: defaultLocale.SucessNotifyType
        });
      })
      .catch((error) => {
        notify({
          title: defaultLocale.ErrorNotifyTitle,
          message: defaultLocale.ErrorNotifyMessage,
          type: defaultLocale.ErrorNotifyType
        });
        this.setState({ error });
      });
  }

  handleChange(event) {
    const { user } = this.state;
    const name = event.target.id;
    const { value } = event.target;
    user[name] = value;
    this.setState({ user }, () => { this.validateField(name, value); });
  }

  validateField(fieldName) {
    const { formErrors, user } = this.state;
    const value = user[fieldName];
    let valid;

    switch (fieldName) {
      case 'firstName':
      case 'lastName':
        valid = !!value;
        formErrors[fieldName] = valid ? '' : defaultLocale.RequiredFieldUnfilled;
        break;
      case 'password':
        valid = value.length >= 6;
        formErrors.password = valid ? '' : defaultLocale.PasswordFieldTooShort;
        break;
      case 'password2':
        valid = value === user.password;
        formErrors.password2 = valid ? '' : defaultLocale.ConfirmPasswordMismatch;
        break;
      default:
        break;
    }
    this.setState({ formErrors });
  }

  render() {
    const { user, formErrors, error } = this.state;

    return (
      <div id="profile-card" className="card text-left mb-3">
        <div className="card-body">
          <h2>{defaultLocale.ProfileTag}</h2>
          <form onSubmit={this.handleSubmit}>
            { error && (
            <div className="alert alert-danger">
              {defaultLocale.ErrorDefaultMessage}
            </div>
            )}
            <div className="form-group">
              <label htmlFor="email">
                {defaultLocale.EmailTag}
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="email"
                placeholder={defaultLocale.EmailPlaceholder}
                onChange={this.handleChange}
                value={user.email}
                disabled
              />
            </div>

            <div className="form-group">
              <label htmlFor="firstName" className="required">
                {defaultLocale.FirstNameTag}
              </label>
              <input
                type="text"
                className={`form-control ${errorClass(formErrors.firstName)}`}
                id="firstName"
                aria-describedby="firstName"
                placeholder={defaultLocale.FirstNamePlaceholder}
                onChange={this.handleChange}
                value={user.firstName}
                required
              />
              {formErrors.firstName && (
              <div className="invalid-feedback">
                {formErrors.firstName}
              </div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="lastName" className="required">
                {defaultLocale.LastNameTag}
              </label>
              <input
                type="lastName"
                className={`form-control ${errorClass(formErrors.lastName)}`}
                id="lastName"
                aria-describedby="lastName"
                placeholder={defaultLocale.LastNamePlaceholder}
                onChange={this.handleChange}
                value={user.lastName}
                required
              />
              {formErrors.lastName && (
              <div className="invalid-feedback">
                {formErrors.lastName}
              </div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="password" className="required">
                {defaultLocale.PasswordTag}
              </label>
              <input
                type="password"
                className={`form-control ${errorClass(formErrors.password)}`}
                id="password"
                placeholder={defaultLocale.PasswordPlaceholder}
                onChange={this.handleChange}
                value={user.password}
                required
              />
              {formErrors.password && (
              <div className="invalid-feedback">
                {formErrors.password}
              </div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="password2" className="required">
                {defaultLocale.Password2Tag}
              </label>
              <input
                type="password"
                className={`form-control ${errorClass(formErrors.password2)}`}
                id="password2"
                placeholder={defaultLocale.Password2Placeholder}
                onChange={this.handleChange}
                value={user.password2}
                required
              />
              {formErrors.password2 && (
              <div className="invalid-feedback">
                {formErrors.password2}
              </div>
              )}
            </div>

            <div className="btn-group" role="group" aria-label="">
              <button type="submit" className="btn btn-primary">
                {defaultLocale.SaveModificationsTag}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

UserProfile.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  store: PropTypes.object.isRequired,
};
export default withStore(UserProfile);
