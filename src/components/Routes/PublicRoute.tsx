import { useSelector } from 'react-redux';
import React from 'react';
import { Navigate } from 'react-router';
import authorizationSelectors from '../../redux/authorization/authorization-selectors';

export const PublicRoute = ({
  children,
  restricted = false,
  redirectTo = '/',
}: {
  children: React.ReactNode,
  restricted: Boolean,
  redirectTo: string,
}): JSX.Element => {
  const isLoggedIn = useSelector(authorizationSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return <>{shouldRedirect ? <Navigate to={redirectTo} /> : children}</>;
};
