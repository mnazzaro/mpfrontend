import React, { useEffect } from 'react';
import store from '../../store';
import Table from '../Table/Table';
import { useDispatch } from 'react-redux';
import SocketContextProvider from '../../SocketContext';


// TODO: This whole component may be extraneous. Possibly remove later
function Game (props) {
    const dispatch = useDispatch();
    const updateWindow = () => dispatch({ type: 'view/updateWindow' });

    useEffect (() => {
        window.addEventListener('resize', updateWindow);
        // console.log("mounted listener");
        return () => window.removeEventListener('resize', updateWindow);
    });

    console.log('rendered game');
    return (
        <SocketContextProvider>
            <Table/>
        </SocketContextProvider>
    );
}

export default Game;