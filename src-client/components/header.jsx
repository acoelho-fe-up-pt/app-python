/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import API from '../api/api';

// Define the main app
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    const { store } = this.props;
    if (!store.get('user')) {
      API.get('auth/me').then(({ data }) => {
        store.set('user', data);
      });
    }
  }

  handleLogout() {
    const { store } = this.props;
    store.set('user', {});
    localStorage.removeItem('token');
  }

  render() {
    const { store, location: { pathname }, t } = this.props;
    const gameMode = store.get('gameMode');
    const user = store.get('user');
    const pathArray = pathname.split('/');
    const firstSegmentPath = pathArray.length ? pathArray[1] : '';

    if (!gameMode) {
      return (
        <div>
          <header className="App-header">
            <Container>
              <Row>
                <Col xs>
                  {user && user.role && user.role === 'admin' && user.id && (
                  <Link
                    to={`${process.env.PUBLIC_URL}/`}
                    className={firstSegmentPath.includes('dashboard') ? 'headerPageActive' : ''}
                  >
                    <i className="fas fa-cogs" />
                    <span className="d-none d-md-block">
                      {t('Management')}
                    </span>
                    <small className="d-block d-md-none">
                      {t('Management')}
                    </small>
                  </Link>
                  )}
                  {user && user.role && user.role !== 'admin' && user.id && (
                  <Link
                    to={`${process.env.PUBLIC_URL}/classes`}
                    className={firstSegmentPath.includes('class') ? 'headerPageActive' : ''}
                  >
                    <i className="fas fa-graduation-cap" />
                    <span className="d-none d-md-block">
                      {t('Classes')}
                    </span>
                    <small className="d-block d-md-none">
                      {t('Classes')}
                    </small>
                  </Link>
                  )}
                </Col>
                <Col xs>
                  <Link
                    to={`${process.env.PUBLIC_URL}/books`}
                    className={firstSegmentPath.includes('book')
                      ? 'headerPageActive' : ''}
                  >
                    <i className="fas fa-book" />
                    <span className="d-none d-md-block">
                      {t('Books')}
                    </span>
                    <small className="d-block d-md-none">
                      {t('Books')}
                    </small>
                  </Link>
                </Col>
                <Col xs>
                  {user && user.id && (
                    <Dropdown>
                      <Dropdown.Toggle variant="light">
                        <Button
                          href="#"
                          variant="light"
                          title={`${user.firstName ? user.firstName : ''} ${user.lastName ? user.lastName : ''}`}
                        >
                          <i className="fas fa-user" />
                          <span className="d-none d-md-block">
                            {user.firstName && user.firstName.length ? user.firstName.charAt(0).toUpperCase() : ''}
                            {user.lastName && user.lastName.length ? user.lastName.charAt(0).toUpperCase() : ''}
                          </span>
                          <small className="d-block d-md-none">
                            {user.firstName && user.firstName.length ? user.firstName.charAt(0).toUpperCase() : ''}
                            {user.lastName && user.lastName.length ? user.lastName.charAt(0).toUpperCase() : ''}
                          </small>
                        </Button>
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href={`${process.env.PUBLIC_URL}/profile`}>
                          {t('Profile')}
                        </Dropdown.Item>
                        <Dropdown.Item onClick={this.handleLogout}>
                          {t('Logout')}
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  )}
                  {!user.id && (
                  <Link
                    to={firstSegmentPath.includes('signin')
                      ? `${process.env.PUBLIC_URL}/signup`
                      : `${process.env.PUBLIC_URL}/signin`}
                  >
                    <i className="fas fa-sign-in-alt" />
                    <span className="d-none d-md-block">
                      {firstSegmentPath.includes('signin')
                        ? t('Signup')
                        : t('Signin')}
                    </span>
                    <small className="d-block d-md-none">
                      {firstSegmentPath.includes('signin')
                        ? t('Signup')
                        : t('Signin')}
                    </small>
                  </Link>
                  )}
                </Col>
              </Row>
            </Container>
          </header>
          <div style={{ height: '50px' }} />
        </div>
      );
    }
    return (
      <button
        id="gameModeBtn"
        type="button"
        onClick={() => store.set('gameMode', false)}
        className="btn"
      >
        {t('ExitGameMode')}
      </button>
    );
  }
}

Header.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  store: PropTypes.object.isRequired,
  // eslint-disable-next-line react/require-default-props
  location: PropTypes.shape({
    // eslint-disable-next-line react/forbid-prop-types
    pathname: PropTypes.string
  })
};
export default withTranslation(['header'])(Header);
