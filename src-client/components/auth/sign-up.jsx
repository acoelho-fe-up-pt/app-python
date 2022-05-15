import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Recaptcha from 'react-recaptcha';

import { withTranslation } from 'react-i18next';
import API from '../../api/api';
import { withStore } from '../../store';
import LanguageSelect from '../languages/languageSelect';

class SignUp extends Component {
  constructor(props) {
    const defaults = {
      email: '', firstName: '', lastName: '', password: '', password2: '', classCode: ''
    };

    super(props);
    this.state = { user: defaults, formErrors: {}, isVerified: false };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
  }

  componentDidMount() {
    const script = document.createElement('script');
    script.async = true;
    script.defer = true;
    script.src = 'https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit';
    document.body.appendChild(script);
    ReactDOM.render(<Recaptcha
      sitekey="6Ldmh_UZAAAAAGWBX-I9NECt4KBMtfhboploAgCK"
      render="explicit"
      onloadCallback={() => { console.log('capcha successfully loaded'); }}
      verifyCallback={this.verifyCallback}
      hl="pt"
    />, document.getElementById('injectRecaptcha'));
  }

  handleSubmit(event) {
    const { isVerified } = this.state;
    const { user, formErrors } = this.state;
    const { history, store, t } = this.props;
    const SomeErrorOccurred = t('SomeErrorOccurred');
    const RecaptchaRequired = t('RecaptchaRequired');
    event.preventDefault();

    if (!isVerified) {
      this.setState({ error: RecaptchaRequired });
      return;
    }

    Object.keys(user).forEach((field) => this.validateField(field));
    const hasErrors = Object.values(formErrors).filter((e) => e).length;

    if (!user || hasErrors) return;
    API.post('auth/register', user)
      .then(({ data }) => {
        this.setState({ error: null });
        store.set('user', data.user);
        localStorage.setItem('token', data.token);
        history.push('/');
      })
      .catch(() => this.setState({ error: SomeErrorOccurred }));
  }

  handleChange(event) {
    const { user } = this.state;
    const name = event.target.id;
    const { value } = event.target;
    user[name] = value;
    this.setState({ user }, () => { this.validateField(name, value); });
  }

  verifyCallback(response) {
    if (response) {
      this.setState({
        isVerified: true
      });
    }
  }

  validateField(fieldName) {
    const { formErrors, user } = this.state;

    const { t } = this.props;
    const InvalidEmail = t('InvalidEmail');
    const PasswordTooShort = t('PasswordTooShort');
    const Password2DoesntMatch = t('Password2DoesntMatch');
    const RequiredField = t('RequiredField');

    const value = user[fieldName];
    let valid;

    switch (fieldName) {
      case 'email':
        valid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        formErrors.email = valid ? '' : InvalidEmail;
        break;
      case 'firstName':
      case 'lastName':
        valid = !!value;
        formErrors[fieldName] = valid ? '' : RequiredField;
        break;
      case 'password':
        valid = value.length >= 6;
        formErrors.password = valid ? '' : PasswordTooShort;
        break;
      case 'password2':
        valid = value === user.password;
        formErrors.password2 = valid ? '' : Password2DoesntMatch;
        break;
      default:
        break;
    }
    this.setState({ formErrors });
  }

  render() {
    const {
      user: {
        email,
        firstName,
        lastName,
        password,
        password2,
        classCode
      },
      formErrors: {
        email: errorEmail,
        password: errorPassword,
        password2: errorPassword2,
        firstName: errorFirstName,
        lastName: errorLastName
      },
      error
    } = this.state;

    const { t } = this.props;
    const SignUpTitleTag = t('SignUpTitleTag');
    const EmailTag = t('EmailTag');
    const EmailPlaceholder = t('EmailPlaceholder');
    const FirstNameTag = t('FirstNameTag');
    const FirstNamePlaceholder = t('FirstNamePlaceholder');
    const LastNameTag = t('LastNameTag');
    const LastNamePlaceholder = t('LastNamePlaceholder');
    const PasswordTag = t('PasswordTag');
    const PasswordPlaceholder = t('PasswordPlaceholder');
    const Password2Tag = t('Password2Tag');
    const Password2Placeholder = t('Password2Placeholder');
    const ClassCodeTag = t('ClassCodeTag');
    const ClassCodePlaceholder = t('ClassCodePlaceholder');
    const SignUpBtnTag = t('SignUpBtnTag');
    const AccountQuestion = t('AccountQuestion');
    const LoginHere = t('LoginHere');
    const UseWithoutSignIn = t('UseWithoutSignIn');

    return (
      <div id="signIn-card" className="text-left mb-2">
        <div className="card mb-4">
          <div className="card-body">
            <h2 className="d-none d-md-block">
              {SignUpTitleTag}
            </h2>
            <form onSubmit={this.handleSubmit}>
              {error && (
              <div className="alert alert-danger">
                Some error occurred
              </div>
              )}
              <div className="form-group">
                <label htmlFor="email" className="required">
                  {EmailTag}
                </label>
                <input
                  type="email"
                  className={`form-control ${errorEmail ? 'is-invalid' : ''}`}
                  id="email"
                  aria-describedby="email"
                  placeholder={EmailPlaceholder}
                  onChange={this.handleChange}
                  value={email}
                  required
                />
                {errorEmail && (
                <div className="invalid-feedback">
                  {errorEmail}
                </div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="firstName" className="required">
                  {FirstNameTag}
                </label>
                <input
                  type="text"
                  className={`form-control ${errorFirstName ? 'is-invalid' : ''}`}
                  id="firstName"
                  aria-describedby="firstName"
                  placeholder={FirstNamePlaceholder}
                  onChange={this.handleChange}
                  value={firstName}
                  required
                />
                {errorFirstName && (
                <div className="invalid-feedback">
                  {errorFirstName}
                </div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="lastName" className="required">
                  {LastNameTag}
                </label>
                <input
                  type="lastName"
                  className={`form-control ${errorLastName ? 'is-invalid' : ''}`}
                  id="lastName"
                  aria-describedby="lastName"
                  placeholder={LastNamePlaceholder}
                  onChange={this.handleChange}
                  value={lastName}
                  required
                />
                {errorLastName && (
                <div className="invalid-feedback">
                  {errorLastName}
                </div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="password" className="required">
                  {PasswordTag}
                </label>
                <input
                  type="password"
                  className={`form-control ${errorPassword ? 'is-invalid' : ''}`}
                  id="password"
                  placeholder={PasswordPlaceholder}
                  onChange={this.handleChange}
                  value={password}
                  required
                />
                {errorPassword && (
                <div className="invalid-feedback">
                  {errorPassword}
                </div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="password2" className="required">
                  {Password2Tag}
                </label>
                <input
                  type="password"
                  className={`form-control ${errorPassword2 ? 'is-invalid' : ''}`}
                  id="password2"
                  placeholder={Password2Placeholder}
                  onChange={this.handleChange}
                  value={password2}
                  required
                />
                {errorPassword2 && (
                <div className="invalid-feedback">
                  {errorPassword2}
                </div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="classCode" className="notRequired">
                  {ClassCodeTag}
                </label>
                <input
                  type="classCode"
                  className="form-control"
                  id="classCode"
                  aria-describedby="classCode"
                  placeholder={ClassCodePlaceholder}
                  onChange={this.handleChange}
                  value={classCode}
                />
              </div>

              <div id="injectRecaptcha" className="form-group" />

              <div className="btn-group" role="group" aria-label="">
                <button type="submit" className="btn btn-primary">
                  {SignUpBtnTag}
                </button>
              </div>
            </form>

            <br />

            <h5>
              {`${AccountQuestion} `}
              <Link to="/signin">
                {`${LoginHere}!`}
              </Link>
            </h5>

            <h5>
              <Link to="/books">
                {UseWithoutSignIn}
              </Link>
            </h5>
          </div>
        </div>
        <LanguageSelect />
      </div>
    );
  }
}

SignUp.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  store: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired,
};
export default withTranslation(['auth'])(withStore(SignUp));
