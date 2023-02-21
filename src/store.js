import { configureStore } from '@reduxjs/toolkit';
import connectReducer from './reducer';

const store = configureStore({
    reducer: {
        connect: connectReducer
    }
});

export default store;