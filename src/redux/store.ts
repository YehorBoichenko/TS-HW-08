import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from './Contacts/contacts-reducers';
import { authReducer } from './authorization/authorization-slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
const persistConfigContact = {
  key: "filter",
  storage,
  whitelist: ["filter"],
};


export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: persistReducer(persistConfigContact,contactsReducer)
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

  devTools: process.env.NODE_ENV === 'development',
});

// eslint-disable-next-line import/no-anonymous-default-export
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>; 

export type AppDispatch = typeof store.dispatch;
