export const CONNECT = "CONNECT";
export const CONNECT_ERROR = "CONNECT_ERROR";
export const LOAD_INITIAL_DATA = "LOAD_INITIAL_DATA";
export const LOAD_NEW_PLAYER = "LOAD_NEW_PLAYER";
export const PLAYER_DISCONNECT = "PLAYER_DISCONNECT";
export const DISCONNECT = "DISCONNECT";


export function connect () {
    return {
        type: CONNECT
    }
}

export function connectError () {
    return {
        type: CONNECT_ERROR
    }
}

export function loadInitialData (payload) {
    return {
        type: LOAD_INITIAL_DATA,
        payload
    }
}

export function loadNewPlayer (payload) {
    return {
        type: LOAD_NEW_PLAYER,
        payload
    }
}

export function handlePlayerDisconnect (payload) {
    return {
        type: PLAYER_DISCONNECT,
        payload
    }
}

export function disconnect () {
    return {
        type: DISCONNECT
    }
}



