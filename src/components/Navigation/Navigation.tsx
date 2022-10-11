import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../Navigation/Navigation.module.css';

export const Navigation = (): JSX.Element => {
  return (
    <nav>
      <NavLink to="/contacts" className={styles.link}>
        Contacts
      </NavLink>
    </nav>
  );
};


