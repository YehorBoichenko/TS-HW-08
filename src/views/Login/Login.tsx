import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { IDataToPost } from '../../interfaces';
import authorizationOperations from '../../redux/authorization/authorization-operations';
import { AppDispatch } from '../../redux/store';
import styles from '../Login/Login.module.css';

export default function LoginView() {
  const dispatch = useDispatch<AppDispatch>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlerChanger = (event: React.FormEvent<HTMLInputElement>): void => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };
  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
        const formData: IDataToPost = { email, password };
    const target = event.target as typeof event.target & {
      email: { value: string };
      password: { value: string };
    };
    formData.email = target.email.value;
    formData.password = target.password.value;
     dispatch(authorizationOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Log in page</h1>
      <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={styles.label}>
          <p className={styles.text}>Email</p>
          <input
            className={styles.input}
            type="email"
            name="email"
            value={email}
            onChange={handlerChanger}
          />
        </label>

        <label className={styles.label}>
          <p className={styles.text}>Password</p>
          <input
            className={styles.input}
            type="password"
            name="password"
            value={password}
            onChange={handlerChanger}
          />
        </label>
        <button type="submit" className={styles.button}>
          Log in
        </button>
      </form>
    </div>
  );
}
