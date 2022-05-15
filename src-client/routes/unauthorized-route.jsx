/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStore } from '../store';

const UnauthorizedRoute = ({ store, component: Component, ...rest }) => {
  const user = store.get('user');
  return (
    <Route
      {...rest}
      render={(props) => (user && user.id ? (
        <Redirect to={{ pathname: '/' }} />
      ) : (
        <Component {...props} />
      ))}
    />
  );
};

UnauthorizedRoute.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  store: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  component: PropTypes.any.isRequired
};

export default withStore(UnauthorizedRoute);
