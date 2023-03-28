import { createSlice } from '@reduxjs/toolkit';
import HeroPfp from '../GameView/assets/blank_avatar.png'

/* 
***************************
** GameState Slice Shape **
***************************

{
    hero: {
        seat: int,
        cosmetic: {
            username: string,
            avatarUri: string
        },
        hand: {
            inHand: bool,
            holes: [
                {
                    rank: string,
                    suit: string
                }
            ],
            stack: {
                committed: decimal,
                uncommitted: decimal
            }
        }
    },
    players: [
        {
            seat: int,
            cosmetic: {
                username: string,
                avatarUri: string
            },
            hand: {
                inHand: bool,
                holes: [string],
                stack: {
                    committed: decimal,
                    uncommitted: decimal
                }
            },
            connectionData: {
                connected: bool,
                disconnectTime: int
            }
        }
    ]
}

***************************
***************************
***************************
*/

const initialState = {
    hero: {
        seat: 0,
        cosmetic: {
            username: 'Hero',
            avatarUri: HeroPfp
        },
        hand: {
            inHand: false,
            holes: null,
            stack: {
                uncommitted: 200,
                committed: 0
            }
        }
    },
    players: []
}

const gameSlice = createSlice ({
    name: 'game',
    initialState,
    reducers: {
        playerConnect (state, action) {
            state.players.push(action.payload)
        }
    }
})

export const { playerConnect } = gameSlice.actions;
export default gameSlice.reducer;