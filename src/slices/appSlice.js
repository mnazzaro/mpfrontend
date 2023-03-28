import { createSlice } from '@reduxjs/toolkit';
import HeroPfp from '../GameView/assets/blank_avatar.png'

/* 
***************************
***** App Slice Shape *****
***************************

{
    currentView: string
}

***************************
***************************
***************************
*/

const initialState = {
    currentView: 'login',
    socketAddress: null
}

const appSlice = createSlice ({
    name: 'app',
    initialState,
    reducers: {
        updateView (state, action) {
            state.currentView = action.payload;
        },
        login (state) {
            state.currentView = 'home';
        },
        joinGame (state, action) {
            state.currentView = 'game';
            state.socketAddress = action.payload;
        }
    }
})

export const { updateView } = appSlice.actions;
export default appSlice.reducer;