import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { fetchContacts } from "redux/contacts/contactsOperations";

import { getError, getIsLoading } from "redux/contacts/selectors";

import Form from "./Form/Form";

import Filter from './Filter/Filter'

import ContactList from "./ContactList/ContactList";

import { ErrorMessage } from "./Error/error";

import Loader from "./Loader/Loader";

import styles from "./App.module.css";

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
 
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
      {/* {isLoading && !error && <Loader/>} */}
      {(isLoading && !error && <Loader/>) || (error && <ErrorMessage/>) || <ContactList /> }       
    </div>
  );
}
