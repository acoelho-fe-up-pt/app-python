/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStore } from '../store';

const PublicRoute = ({ store, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (<Component {...props} store={store} />)}
  />
);

PublicRoute.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  store: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  component: PropTypes.any.isRequired
};

export default withStore(PublicRoute);
