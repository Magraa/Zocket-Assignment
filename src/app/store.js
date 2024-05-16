import { configureStore } from '@reduxjs/toolkit';
import adReducer from './adSlice';

export const store = configureStore({
    reducer: {
        ad: adReducer
    }
})
