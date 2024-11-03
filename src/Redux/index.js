import { combineReducers, configureStore } from '@reduxjs/toolkit'
import chat from './Chat/ChatSlice'; 
import mode from './Mode/ModeSlice'


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
import storage from 'redux-persist/lib/storage'
const rootPersistConfig = {
  key: 'root',
  version: 1,
  storage,
  whiteList: ['mode']
}
const modePersistConfig = {
  key: 'mode',
  version: 1,
  storage,
  whiteList: ['value']
}

const rootReducer = combineReducers({
  mode : persistReducer(modePersistConfig , mode),
  chat ,
})
 const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer ,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
let persistor = persistStore(store)
export { store , persistor }