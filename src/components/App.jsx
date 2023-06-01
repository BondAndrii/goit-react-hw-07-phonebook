import React,
{ useEffect }
  from "react";

import Form from "./Form/Form";

import Filter from './Filter/Filter'

import ContactList from "./ContactList/ContactList";

import styles from "./App.module.css";

import { useDispatch } from "react-redux";

import { fetchContacts } from "redux/contacts/contactsOperations";

// import { fetchContacts } from "redux/contacts/contactsOperations";


export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  },[dispatch])

  return (
    <div className={styles.Container}>
      <header>
        <h1 className={styles.Tittle}>Записник контактів</h1>
      </header>
      <Form />      
      <h2 className={styles.SecondTittle}>Контакти</h2>
      <Filter />
      <ContactList />     
    </div>
  );
}
