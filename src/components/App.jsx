import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { fetchContacts } from "redux/contacts/contactsOperations";

import { getIsLoading } from "redux/contacts/selectors";

import Form from "./Form/Form";

import Filter from './Filter/Filter'

import ContactList from "./ContactList/ContactList";

import Loader from "./Loader/Loader";

import styles from "./App.module.css";

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
 
  useEffect(() => {
    dispatch(fetchContacts());
  },[dispatch])
  console.log("isLoading", isLoading);  
  return (
    <div className={styles.Container}>
      <header>
        <h1 className={styles.Tittle}>Записник контактів</h1>
      </header>      
      <Form />      
      <h2 className={styles.SecondTittle}>Контакти</h2>
      <Filter />      
      <ContactList />   
      {isLoading && <Loader/>}
    </div>
  );
}
