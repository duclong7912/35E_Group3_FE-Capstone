import { configureStore } from '@reduxjs/toolkit';
import jobMenuReducer from './jobMenuReducer/jobMenuReducer';

export const store = configureStore({
    reducer: {
        jobMenuReducer
    }
})

export type StateType = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;