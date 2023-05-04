import React, { createContext } from 'react'
import io from 'socket.io-client';
import store from './store';
import {
    connect, 
    disconnect,
    connectError 
    } 
    from './actions';

// TODO: With redux, we no longer need contexts. This should basically just be a slice

const SocketContext = createContext();

const SocketContextProvider = ({ children }) => {
    let socket;
    const socketAddress = store.getState().app.socketAddress;
    const bearerToken = store.getState().app.auth.bearerToken;

    if (!socket) {
        console.log("Connecting to socket at " + socketAddress);
        console.log("With bearer token: " + bearerToken);
        socket = io.connect(socketAddress, {
            auth: bearerToken,
            data: {
                stack: 200,
            }
        }); 

        socket.on("connect", () => {
            console.log("Connected")
            store.dispatch(connect());
        });

        socket.on("connect_error", (err) => {
            console.log(`connect_error due to ${err.message}`);
            store.dispatch(connectError());
        });

        socket.on("load_initial_data", (payload) => {
            console.log(payload);
        })

        // socket.on("disconnect", (reason) => {
        //     const payload = JSON.parse(reason);
        //     dispatch(disconnect(payload));
        // }); TODO: Maybe later lol, no reason for now

        socket.on("disconnect", () => {
            store.dispatch(disconnect());
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