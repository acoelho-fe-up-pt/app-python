/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStore } from '../store';

const PrivateRoute = ({ store, component: Component, ...rest }) => {
  const user = store.get('user');
  return (
    <Route
      {...rest}
      render={(props) => (user && user.id ? (
        <Component {...props} store={store} />
      ) : (<Redirect to={{ pathname: '/signin' }} />))}
    />
  );
};

PrivateRoute.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  store: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  component: PropTypes.any.isRequired
};

export default withStore(PrivateRoute);
