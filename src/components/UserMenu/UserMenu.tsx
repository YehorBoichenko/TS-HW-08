import { useDispatch, useSelector } from 'react-redux';
import styles from '../UserMenu/userMenu.module.css';
import authorizationSelectors from '../../redux/authorization/authorization-selectors';
import authorizationOperations from '../../redux/authorization/authorization-operations';
import React from 'react';
import { AppDispatch } from '../../redux/store';

export const UserMenu = (): JSX.Element => {
 const dispatch = useDispatch<AppDispatch>();
  const name = useSelector(authorizationSelectors.getUserName);
  return (
    <div className={styles.container}>
      <span className={styles.name}>Welcome {name}!</span>
      <button
        type="button"
        onClick={() => dispatch(authorizationOperations.logOut())}
      >
        Exit
      </button>
    </div>
  );
};
