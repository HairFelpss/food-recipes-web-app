import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
// import { Container } from './styles';

import { store } from '../store'

export default function RouteWrapper({ component: Component, isPrivate = false, ...rest }) {
  const { signed } = store.getState().auth;

  if (!signed && isPrivate) return <Redirect to="/" />;

  if (signed && !isPrivate) return <Redirect to="/Home" />;

  return <Route {...rest} component={Component} />;
};

RouteWrapper.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  isPrivate: PropTypes.bool,
};

RouteWrapper.defaultProps = {
  isPrivate: false
};
