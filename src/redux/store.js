import { configureStore } from "@reduxjs/toolkit";

// import contReduc from "./contacts/contactsReducer"

// import {
//     persistStore,
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
// } from 'redux-persist'

// import storage from 'redux-persist/lib/storage';

import { combineReducers } from "redux";

import { contactsReducer } from "./contacts/slice";

import { filterReducer } from "./filter/slice";

// const persistConfig = {
//     key: 'contacts',
//     storage: storage,
//     whitelist:['contacts'],
  
// }

const rootReducer = combineReducers({
    // contacts: contReduc,
    contacts: contactsReducer,
    filter: filterReducer,
})

// const persistedRootReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: rootReducer,
  
});



// export const persistor = persistStore(store);
