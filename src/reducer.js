import { CONNECT, CONNECT_ERROR, DISCONNECT } from './actions';

const initialState = {
    view: {
        width: window.innerWidth,
        height: window.innerHeight
    },
    connectionData: {
        connected: false,
        connectionTime: 0, // Add logic for this stuff
        disconnectTime: 0,
    }
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case CONNECT:
            if (!state.connectionData.connected) {
                return {
                    ...state,
                    connectionData: {
                        connected: true,
                        connectionTime: new Date().getTime(),
                        disconnectTime: 0,
                    }
                }
            } else {
                return state;
            }
        case CONNECT_ERROR:
            console.log("CONNECT_ERROR, TODO: let's deal with this!");
            return {
                ...state,
                connectionData: {
                    connected: false,
                    connectionTime: 0,
                    disconnectTime: new Date().getTime()
                }
            }
        case DISCONNECT: 
            console.log("DISCONNECT, TODO: let's deal with this!");
            return {
                ...state,
                connectionData: {
                    connected: false,
                    connectionTime: 0,
                    disconnectTime: new Date().getTime()
                }
            }
        default:
            return state;
    }
}

export default Reducer;

