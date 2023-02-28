import React from 'react';
import store from '../../store';
import Table from '../Table/Table';
import { Provider } from 'react-redux';
// import { SocketContext } from '../SocketListener';
// import children from '../SocketListener';
import SocketContextProvider from '../../SocketContext';

// class Game extends React.Component {
//     constructor (props) {
//         super(props);
//         //this.socket = io(props.connectionString, {autoConnect: false});

//         this.state = { 
//             connected: false, // Probably want to handle this elsewhere
//             bettingOrder: null
//         };
//     }

    // componentDidMount () {

    //     // Set up event handlers 
    //     this.socket.on("connect", this.onConnect);
    //     this.socket.on("connect_error", this.onConnectError)
    //     this.socket.on("disconnect", this.onDisconnect);
    //     this.socket.on("initial_data", this.onInitialData);

    //     this.socket.connect();
    // }

    // onConnect = () => {
    //     console.log('Socket id: ' + this.socket.id);
    //     this.setState({connected: true});
    // }

    // onConnectError = () => {
    //     console.log("connect error");
    //     setTimeout(() => {
    //         this.socket.connect();
    //     }, 1000);
    // }

    // onDisconnect = (reason) => {
    //     console.log("Disconnected");
    //     if (reason === "io server disconnect") {
    //         this.props.gameOver();
    //     } else {
    //         this.setState({ connected: this.socket.connected }); // Should it just be false?
    //     }
    // }

    // onInitialData = (initialData) => {
    //     console.log(initialData);
    //     if (this.state.bettingOrder === null) {
    //         this.setState({bettingOrder: initialData.bettingOrder});
    //     }
    // }

//     render () {
//         if (this.state.bettingOrder === null) {
//             return (<div>Waiting for game to start</div>)
//         } else {
//             return (
//                 <Table 
//                     socket={this.socket}
//                     heroData={this.props.heroData}
//                     bettingOrder={this.state.bettingOrder}
//                     sLength={this.props.view.width}
//                     radius={this.props.view.height / 4}
//                     anchor={{x: this.props.view.width / 2, y: this.props.view.height / 2}}
//                 />
//             );
//         }
//     }
// }

function Game (props) {
    // if (this.state.bettingOrder === null) {
    //     return (<div>Waiting for game to start</div>)
    // } else {
    console.log(store === undefined);
    return (
        <Provider store={store}>
            <SocketContextProvider>
                <Table 
                    heroData={props.heroData}
                    bettingOrder={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
                    anchor={{x: props.view.width / 2, y: props.view.height / 2}}
                />
            </SocketContextProvider>
        </Provider>
    );
}

export default Game;