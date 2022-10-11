import React from 'react';
import styles from '../loader/loader.module.css';
import { BallTriangle } from 'react-loader-spinner';


export const LoaderSpinner = (): JSX.Element => {
  return (
    <div className={styles.loader}>
      <BallTriangle color="#3f51b5" height={200} width={200} />
    </div>
  );
};
