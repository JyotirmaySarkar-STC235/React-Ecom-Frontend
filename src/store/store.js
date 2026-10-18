import { configureStore } from '@reduxjs/toolkit'
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
import cartReducer from './slices/cartSlice'
import overlayReducer from './slices/overlay'

// ponytail: Vite breaks CJS default from redux-persist/lib/storage (getItem is not a function)
const storage = {
  getItem: (key) => Promise.resolve(localStorage.getItem(key)),
  setItem: (key, value) => Promise.resolve(localStorage.setItem(key, value)),
  removeItem: (key) => Promise.resolve(localStorage.removeItem(key)),
}

// ponytail: only items — status/error shouldn't survive a refresh
const cartPersistConfig = {
  key: 'cart',
  storage,
  whitelist: ['items'],
}

export const store = configureStore({
  reducer: {
    cart: persistReducer(cartPersistConfig, cartReducer),
    overlay: overlayReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)
