import React, { createContext } from 'react'
import io from 'socket.io-client';
import { useDispatch, useSelector } from 'react-redux';
import {
    connect, 
    disconnect,
    connectError 
    } 
    from './actions';

const SocketContext = createContext();

const SocketContextProvider = ({ children }) => {
    let socket;
    const socketAddress = useSelector((state) => state.app.socketAddress);
    const dispatch = useDispatch();

    if (!socket) {
        socket = io.connect(socketAddress); 

        socket.on("connect", () => {
            dispatch(connect());
        });

        socket.on("connect_error", () => {
            dispatch(connectError());
        });

        // socket.on("disconnect", (reason) => {
        //     const payload = JSON.parse(reason);
        //     dispatch(disconnect(payload));
        // }); TODO: Maybe later lol, no reason for now

        socket.on("disconnect", () => {
            dispatch(disconnect());
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