import { configureStore } from '@reduxjs/toolkit';
import jobMenuReducer from './jobMenuReducer/jobMenuReducer';
import userReducer from './userReducer/userReducer';
import adminReducer from './adminReducer/adminReducer';

export const store = configureStore({
    reducer: {
        userReducer,
        jobMenuReducer,
        adminReducer
    }
})

export type StateType = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;