import {configureStore} from '@reduxjs/toolkit';
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
import AsyncStorage from '@react-native-async-storage/async-storage';

import {dressApi} from './dress';
import {cartReducer} from './cart';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedCardReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
  reducer: {
    [dressApi.reducerPath]: dressApi.reducer,
    cart: persistedCardReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(dressApi.middleware),
});

export const persistor = persistStore(store);
