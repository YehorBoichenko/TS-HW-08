import React, { ReactNode } from 'react';
import styles from './Container.module.css';

export const Container = ({
  children,
}: {
  children: ReactNode,
}): JSX.Element => {
  return <div className={styles.container}>{children}</div>;
};
