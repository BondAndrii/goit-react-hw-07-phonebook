import { configureStore } from "@reduxjs/toolkit";

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'

import storage from 'redux-persist/lib/storage';

import { combineReducers } from "redux";

import { contactsReducer } from "./contacts/slice";

import { filterReducer } from "./filter/slice";

const persistConfig = {
    key: 'contacts',
    storage: storage,
    whitelist:['contacts'],
  
}

const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
})

const persistedRootReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedRootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});



export const persistor = persistStore(store);
