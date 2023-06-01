import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

// import { fetchingInProgress, fetchingSuccess, fetchingError } from "./slice";

axios.defaults.baseURL = "https://64773ca49233e82dd53b3b81.mockapi.io";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try {
        const response = await axios.get("/contacts");
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
    
});

export const addContact = createAsyncThunk("contacts/addContact", async (data, thunkAPI) => {
    try {
        const responce = await axios.post("/contacts", { data });
        return responce.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (contactId, thunkAPI) => {
    try {
        const responce = await axios.delete(`/contacts/${contactId}`);
        return responce.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
} )

// export const fetchContacts = () => async dispatch => {
//     try {
//         dispatch(fetchingInProgress());
//         const response = await axios.get("/contacts")
//         dispatch(fetchingSuccess(response.data));
//     } catch (error) {
//         dispatch(fetchingError(error.message))
//     }
// }

// export const fetchContacts = ( ) => async dispatch => { 
    
//     dispatch(contactsActions.fetchContactsRequest());  

//     try {
//         const contacts = await api.fetchContacts();

//         dispatch(contactsActions.fetchContactsSuccess(contacts));

//     } catch (error) {
//         dispatch(contactsActions.fetchContactsError(error))
//     }
// }