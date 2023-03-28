import { createSlice } from '@reduxjs/toolkit';

/* 
***************************
**** View Slice Shape *****
***************************

{
    view: {
        width: int,
        height: int
    }
}

***************************
***************************
***************************
*/

const initialState = {
    window: {
        width: window.innerWidth,
        height: window.innerHeight
    }
}

const viewSlice = createSlice ({
    name: 'view',
    initialState,
    reducers: {
        updateWindow (state) {
            state.window = {
                width: window.innerWidth,
                height: window.innerHeight
            };
        }
    }
});

export const { updateWindow} = viewSlice.actions;
export default viewSlice.reducer;