import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./contactsOperations";


// import initialContacts from "../../data/contacts.json"


const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    reducers: {
        // fetchingInProgress(state) {
        //     state.isLoading = true;
        // },
        // fetchingSuccess(state, action) {
        //     state.isLoading = false;
        //     state.error = null;
        //     state.items = action.payload;
        // },
        // fetchingError(state, action) {
        //     state.isLoading = false;
        //     state.error = action.payload;
        // },
        // delContact(state, action) {
        //     return state.filter(contact => contact.id !== action.payload)
        // }
    },
    extraReducers: builder => 
        builder.addCase(fetchContacts.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(fetchContacts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        }).addCase(fetchContacts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }).addCase(addContact.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(addContact.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload);
        }).addCase(addContact.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }).addCase(deleteContact.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(deleteContact.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(
                contact => contact.id === action.payload.id);
                state.items.splice(index, 1);
            // state.items.filter(item => item.id !== action.payload)
        }).addCase(deleteContact.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        } )
    // {
    //     [fetchContacts.pending](state, action) {
    //         state.isLoading = true;
    //     },
    //     [fetchContacts.fulfilled](state, action) {
    //         state.isLoading = false;
    //         state.error = null;
    //         state.items = action.payload;
    //     },
    //     [fetchContacts.rejected](state, action) {
    //         state.isLoading = false;
    //         state.error = action.payload;
    //     },
    //     [addContact.pending](state, action) {
    //         state.isLoading = true;
    //     },
    //     [addContact.fulfilled](state, action) {
    //         state.isLoading = false;
    //         state.error = null;
    //         state.items.push(action.payload);
    //     },
    //     [addContact.rejected](state, action) {
    //         state.isLoading = false;
    //         state.error = action.payload;
    //     },
    //     [deleteContact.pending](state, action) {
    //         state.isLoading = true;
    //     },
    //     [deleteContact.fulfilled](state, action) {
            // state.isLoading = false;
            // state.error = null;
            // state.items.filter(item => item.id !== action.payload)
    //     }
    // }
})

// export const { fetchingInProgress, fetchingSuccess, fetchingError } =
//   contactsSlice.actions;
// const contactsSlice = createSlice({
//     name: "contacts",
//     initialState: initialContacts,
//     reducers: {
//         addContact(state, action) {
//             return [...state, action.payload,]
//         },
//         delContact(state, action) {
//             return state.filter(contact => contact.id !== action.payload)
//         }
//     },
// })


export const contactsReducer = contactsSlice.reducer;

// export const { addContact, delContact } = contactsSlice.actions;

