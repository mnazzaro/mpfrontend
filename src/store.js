import { configureStore } from '@reduxjs/toolkit';

// TODO: Figure out a way to clean this up
import connectionReducer from './slices/connectionSlice';
import gameReducer from './slices/gameSlice';
import viewReducer from './slices/viewSlice';
import appReducer from './slices/appSlice';

const store = configureStore({
    reducer: {
        connection: connectionReducer,
        game: gameReducer,
        view: viewReducer,
        app: appReducer
    }
});

export default store;