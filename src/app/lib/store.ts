import { configureStore } from '@reduxjs/toolkit'
import quizReducer from './features/quiz/quizSlice';

export const store = () => {
    return configureStore({
        reducer: {
            quiz:quizReducer
        }
    })
}

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];