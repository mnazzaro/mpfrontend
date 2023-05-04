import { createSlice } from '@reduxjs/toolkit';
import HeroPfp from '../GameView/assets/blank_avatar.png'

/* 
***************************
***** App Slice Shape *****
***************************

{
    currentView: string,
    auth: {
        bearerToken: jwt,
        refreshToken: jwt
    },
    socketAddress: string
}

***************************
***************************
***************************
*/

const initialState = {
    currentView: 'login',
    auth: {
        bearerToken: null,
        refreshToken: null,
    },
    socketAddress: 'http://127.0.0.1:5000' // TODO: This will be set somewhere else, probably on login
}

const appSlice = createSlice ({
    name: 'app',
    initialState,
    reducers: {
        updateView (state, action) {
            state.currentView = action.payload;
        },
        login (state, action) {
            state.currentView = 'home';
            state.auth.bearerToken = action.payload;
        },
        joinGame (state, action) {
            state.currentView = 'game';
            state.socketAddress = action.payload;
        }
    }
})

export const { updateView } = appSlice.actions;
export default appSlice.reducer;