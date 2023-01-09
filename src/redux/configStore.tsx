import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {

    }
})

export type StateType = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;