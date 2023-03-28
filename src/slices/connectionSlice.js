import { createSlice } from '@reduxjs/toolkit';

/* 
***************************
*** Connect Slice Shape ***
***************************

{
    connectionData: {
        connected: bool,
        connectionTime: int,
        disconnectTime: int,
    }
}

***************************
***************************
***************************
*/

const initialState = {
    connectionData: {
        connected: false,
        connectionTime: 0, // Add logic for this stuff
        disconnectTime: Date.now(),
    }
}

const connectionSlice = createSlice ({
    name: 'connection',
    initialState,
    reducers: {
        connect (state) {
            state.connectionData = {
                connected: true,
                connectionTime: Date.now(),
                disconnectTime: -1
            }
        },
        disconnect (state) {
            state.connectionData = {
                connected: false,
                connectionTime: -1,
                disconnectTime: Date.now()
            }
        },
        connect_error (state) {
            state.connectionData = {
                connected: false,
                connectionTime: -1,
                disconnectTime: Date.now()
            }
        }
    }
})

export const { connect, disconnect } = connectionSlice.actions;
export default connectionSlice.reducer;