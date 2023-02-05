import { configureStore } from '@reduxjs/toolkit';
import jobMenuReducer from './jobMenuReducer/jobMenuReducer';
import userReducer from './userReducer/userReducer';

export const store = configureStore({
    reducer: {
        jobMenuReducer,
        userReducer
    }
})

export type StateType = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;