import React from 'react';
import { io } from 'socket.io-client';
import Table from '../Table/Table';

class Game extends React.Component {
    constructor (props) {
        super(props);
        this.socket = io(props.connectionString, {autoConnect: false});

        this.state = { 
            connected: this.socket.connected,
            bettingOrder: null
        };
    }

    componentDidMount () {

        // Set up event handlers 
        this.socket.on("connect", this.onConnect);
        this.socket.on("connect_error", this.onConnectError)
        this.socket.on("disconnect", this.onDisconnect);
        this.socket.on("initial_data", this.onInitialData);

        this.socket.connect();
    }

    onConnect = () => console.log('Socket id: ' + this.socket.id);

    onConnectError = () => {
        setTimeout(() => {
            this.socket.connect();
        }, 1000);
    }

    onDisconnect = (reason) => {
        if (reason === "io server disconnect") {
            this.props.gameOver();
        } else {
            this.setState({ connected: this.socket.connected }); // Should it just be false?
        }
    }

    onInitialData = (initialData) => {
        if (this.state.bettingOrder === null) {
            this.setState({bettingOrder: initialData.bettingOrder});
        }
    }

    render () {
        if (this.state.bettingOrder === null) {
            return (<div>Waiting for game to start</div>)
        } else {
            return (
                <Table 
                    socket={this.socket}
                    heroData={this.props.heroData}
                    bettingOrder={this.state.bettingOrder}
                    sLength={this.props.view.width}
                    radius={this.props.view.height / 4}
                    anchor={{x: this.props.view.width / 2, y: this.props.view.height / 2}}
                />
            );
        }
    }
}

export default Game;