import React from 'react';
import { Link } from './Authorization.styled';


export const Authorization = (): JSX.Element => {
  return (
    <div>
      <Link
        to="/register"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Register
      </Link>
      <Link
        to="/login"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Log in
      </Link>
    </div>
  );
};
