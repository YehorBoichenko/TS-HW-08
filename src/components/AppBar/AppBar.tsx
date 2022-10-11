import { useSelector } from 'react-redux';
import {Navigation} from '../Navigation/Navigation';
import {UserMenu} from '../UserMenu/UserMenu';
import {Authorization} from '../Authorization/Authorization';
import authorizationSelectors from '../../redux/authorization/authorization-selectors';
import styles from '../AppBar/AppBar.module.css';
import React from 'react';

export const AppBar = (): JSX.Element =>{
  const isLoggedIn = useSelector(authorizationSelectors.getIsLoggedIn);
  return (
    <header className={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <Authorization />}
    </header>
  );
}
