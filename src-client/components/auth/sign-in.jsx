import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Recaptcha from 'react-recaptcha';
import { withTranslation } from 'react-i18next';
import { withStore } from '../../store';
import API from '../../api/api';
import LanguageSelect from '../languages/languageSelect';

const SIGNIN_RECAPTCHA_ENABLE = 0;

class SignIn extends Component {
  constructor(props) {
    const defaults = { email: '', password: '' };
    super(props);
    this.state = { user: defaults, formErrors: {}, isVerified: false };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
  }

  componentDidMount() {
    if (SIGNIN_RECAPTCHA_ENABLE) {
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
  }

  handleSubmit(event) {
    const { isVerified } = this.state;
    const { user, formErrors } = this.state;
    const { history, store, t } = this.props;
    const InvalidCredentials = t('InvalidCredentials');
    const RecaptchaRequired = t('RecaptchaRequired');

    event.preventDefault();

    if (SIGNIN_RECAPTCHA_ENABLE && !isVerified) {
      this.setState({ error: RecaptchaRequired });
      return;
    }

    Object.keys(user).forEach((field) => this.validateField(field));
    const hasErrors = Object.values(formErrors).filter((e) => e).length;

    if (!user || hasErrors) return;
    API.post('auth/login', user)
      .then(({ data: { user: authUser, token } }) => {
        this.setState({ error: null });
        store.set('user', authUser);
        localStorage.setItem('token', token);

        if (!authUser.role || (authUser && authUser.role && authUser.role !== 'admin')) {
          history.push('/classes');
        } else if (authUser && authUser.role && authUser.role === 'admin') {
          history.push('/dashboard');
        } else {
          history.push('/books');
        }
      })
      .catch(() => this.setState({ error: InvalidCredentials }));
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

    const value = user[fieldName];
    let valid;

    switch (fieldName) {
      case 'email':
        valid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        formErrors.email = valid ? '' : InvalidEmail;
        break;
      case 'password':
        valid = value.length >= 6;
        formErrors.password = valid ? '' : PasswordTooShort;
        break;
      default:
        break;
    }
    this.setState({ formErrors });
  }

  render() {
    const {
      user: { email, password },
      formErrors: { email: errorEmail, password: errorPassword },
      error
    } = this.state;
    const { t } = this.props;
    const SignInTitleTag = t('SignInTitleTag');
    const EmailTag = t('EmailTag');
    const EmailPlaceholder = t('EmailPlaceholder');
    const PasswordTag = t('PasswordTag');
    const PasswordPlaceholder = t('PasswordPlaceholder');
    const SignInBtnTag = t('SignInBtnTag');
    const NoAccountQuestion = t('NoAccountQuestion');
    const SignUpLink = t('SignUpLink');
    const UseWithoutSignIn = t('UseWithoutSignIn');

    return (
      <div id="signIn-card" className="text-left mb-2">
        <div className="card mb-4">
          <div className="card-body">
            <h2 className="d-none d-md-block">
              {SignInTitleTag}
            </h2>
            <form onSubmit={this.handleSubmit}>
              {error && (
              <div className="alert alert-danger">
                {error}
              </div>
              )}
              <div className="form-group">
                <label htmlFor="email">
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
                />
                {errorEmail && (
                <div className="invalid-feedback">
                  {errorEmail}
                </div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="password">
                  {PasswordTag}
                </label>
                <input
                  type="password"
                  className={`form-control ${errorPassword ? 'is-invalid' : ''}`}
                  id="password"
                  placeholder={PasswordPlaceholder}
                  onChange={this.handleChange}
                  value={password}
                />
                {errorPassword && (
                <div className="invalid-feedback">
                  {errorPassword}
                </div>
                )}
              </div>

              <div id="injectRecaptcha" className="form-group" />

              <div className="btn-group" role="group" aria-label="">
                <button type="submit" className="btn btn-primary">
                  {SignInBtnTag}
                </button>
              </div>
            </form>

            <br />

            <h5>
              {`${NoAccountQuestion} `}
              <Link to="/signup">
                {`${SignUpLink}.`}
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

SignIn.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  store: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired,
};
export default withTranslation(['auth'])(withStore(SignIn));
