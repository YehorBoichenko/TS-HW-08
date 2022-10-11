import { Container } from '../../components/Container/Container';
import ContactForm from '../../components/ContactForm/ContactForm';
import {Filter} from '../../components/Filter/Filter';
import {ContactList} from '../../components/ContactLIst/ContactList';
import styles from '../Contactspage/ContactsPage.module.css';
import React from 'react';

export const ContactsViewPage = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <Container>
        <h1 className={styles.title}> Phonebook</h1>
        <ContactForm />
        <Filter value='' onChange={function (): void {
        } }  />
        <ContactList contact={[]} onDelete={function (): void {
        } }  />
      </Container>
    </div>
  );
};
