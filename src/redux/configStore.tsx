import { configureStore } from '@reduxjs/toolkit';
import JobDetailReducer from './JobDetailReducer/JobDetailReducer';
import jobListReducer from './jobListReducer/jobListReducer';
import jobMenuReducer from './jobMenuReducer/jobMenuReducer';
import jobTypeReducer from './jobTypeReducer/jobTypeReducer';
import userReducer from './userReducer/userReducer';
import adminReducer from './adminReducer/adminReducer';

export const store = configureStore({
    reducer: {
        userReducer,
        jobMenuReducer,
        jobTypeReducer,
        jobListReducer,
        JobDetailReducer,
       
        adminReducer,
    }
})

export type StateType = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;