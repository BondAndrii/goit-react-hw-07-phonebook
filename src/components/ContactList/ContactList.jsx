import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { delContact } from "redux/contacts/slice";

import { getFilteredContacts } from "redux/contacts/selectors";

import styles from "./ContactList.module.css"

const ContactList = () => {
    const filteredContacts = useSelector(getFilteredContacts);
    const dispatch = useDispatch();
    
    return (
        <ul className={styles.ContactList}>
            {filteredContacts.map((contact) => <li className={styles.ContactList__element} key={contact.id} id={contact.id}>
                <p className={styles.Text}>{contact.name}: {contact.number}</p>
                <button className={styles.Button__element} type="button" onClick={()=> dispatch(delContact(contact.id))}>Видали!</button>
            </li>
            )}
        </ul>
    );
}

export default ContactList;

