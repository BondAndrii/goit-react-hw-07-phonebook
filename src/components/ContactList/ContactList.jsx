import React from "react";

import { useDispatch, useSelector } from "react-redux";

// import { delContact } from "redux/contacts/slice";

import { getFilteredContacts } from "redux/contacts/selectors";

import styles from "./ContactList.module.css";

import { deleteContact } from "redux/contacts/contactsOperations";

const ContactList = () => {

    const filteredContacts = useSelector(getFilteredContacts);
    console.log("filteredContacts", filteredContacts )
    const dispatch = useDispatch();
    
    return (
        <ul className={styles.ContactList}>
            {filteredContacts.items.map((contact) => {
                
                return (
                     <li className={styles.ContactList__element} key={contact.id} id={contact.id}>
                <p className={styles.Text}>{contact.name}: {contact.number}</p>
                <button className={styles.Button__element} type="button" onClick={()=> dispatch(deleteContact(contact.id))}>Видали!</button>
            </li>
                )
            }
            )}
        </ul>
    );
}

export default ContactList;

