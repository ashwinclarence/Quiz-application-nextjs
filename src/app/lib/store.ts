import { combineReducers, configureStore } from '@reduxjs/toolkit';
import quizReducer from './features/quiz/quizSlice';
import adminReducer from './features/adminSlice/adminSlice'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { ThunkDispatch } from '@reduxjs/toolkit';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  quiz: quizReducer,
  admin:adminReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Directly export the store object
const store = configureStore({
  reducer: persistedReducer, // persist reducer is applied here
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export const persistor = persistStore(store);

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = ThunkDispatch<RootState, undefined, any>;

export default store;
