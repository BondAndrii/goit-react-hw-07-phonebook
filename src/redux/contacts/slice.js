import { createSlice } from "@reduxjs/toolkit";

import initialContacts from "../../data/contacts.json"

const contactsSlice = createSlice({
    name: "contacts",
    initialState: initialContacts,
    reducers: {
        addContact(state, action) {
            return [...state, action.payload,]
        },
        delContact(state, action) {
            return state.filter(contact => contact.id !== action.payload)
        }
    },
})


export const contactsReducer = contactsSlice.reducer;

export const { addContact, delContact } = contactsSlice.actions;

