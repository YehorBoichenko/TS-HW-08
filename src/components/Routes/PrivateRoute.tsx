import { useSelector } from 'react-redux';
import React  from 'react';
import { Navigate } from 'react-router';
import authorizationSelectors from '../../redux/authorization/authorization-selectors';

export const PrivateRoute = ({
  children,
}: {
  children?: React.ReactNode
}): JSX.Element => {
  const isLoggedIn = useSelector(authorizationSelectors.getIsLoggedIn);
  return <>{isLoggedIn ? children : <Navigate to="/login" />}
  </>;
};
