import React, { createContext } from 'react'
import io from 'socket.io-client';
import { useDispatch } from 'react-redux';
import {
    connect, 
    disconnect,
    connectError 
    } 
    from './actions';

const SocketContext = createContext();

const SocketContextProvider = ({ children }) => {
    let socket;

    const dispatch = useDispatch();

    if (!socket) {
        socket = io.connect("http://localhost:8002"); // TODO: What is this supposed to be?

        socket.on("connect", () => {
            dispatch(connect());
        });

        socket.on("connect_error", () => {
            dispatch(connectError());
        });

        socket.on("disconnect", (reason) => {
            const payload = JSON.parse(reason);
            dispatch(disconnect(payload));
        });
    }

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )
}

export { SocketContext }
export default SocketContextProvider;