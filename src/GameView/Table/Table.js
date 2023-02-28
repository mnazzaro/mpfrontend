import React, { useContext } from 'react';
import Player from '../Player/Player';
import { useStore } from 'react-redux';
import { SocketContext } from '../../SocketContext';
import './table.css';

// class Table extends React.Component {
    
//     constructor(props) {
//         super (props);
//         // this.state = {
//         //     bettingOrder: props.bettingOrder,
//         //     connectedPlayerData: {}, // json object structured like: { 1: {...cosmetic}} where 1 is the id
//         //     heroData: props.heroData, // json object structured like: { id: 1, cosmetic: {...}}
//         // }
//     }

//     componentDidMount () {
//         props.socket.on('load_player', this.onLoadPlayer);
//     }

//     onLoadPlayer = (playerData) => {
//         const temp_pd = this.state.connectedPlayerData;
//         temp_pd[playerData['id']] = playerData['id'];
//         this.setState({ connectedPlayerData: temp_pd });
//     }
// }

function Table (props) {
    const store = useStore();
    const pi = 3.14159;
    const length = store.getState().connect.view.width / 4;
    const radius = store.getState().connect.view.height / 3.2;
    const n = props.bettingOrder.length; // TODO
    const perimeter = (2 * length) + (2 * pi * radius);
    const distBetween = perimeter / n;
    let totalDist = 0;
    let seatingLocations = {};
    let x = 0;
    let y  = 0;
    console.log("Length: " + length + ", Radius: " + radius);
    const socket = useContext(SocketContext);

    const style = {
        position: 'absolute',
        // width: 'fit-content',
        // height: 'auto',
        // margin: '0 auto',
    };

    for (let i = 0; i < n; i++) {
        
        // Check to see if we are on the bottom left flat bit
        if (totalDist <= (length / 2)) {
            console.log(i + " hit 1");
            x = props.anchor.x - totalDist;
            y = props.anchor.y + radius;
        } else if (totalDist <= ((length / 2) + (pi * radius))) {
            console.log(i + " hit 2");
            const theta = (totalDist - (length / 2)) / radius;
            x = props.anchor.x - (length / 2)  - (radius * Math.sin(theta));
            y = props.anchor.y + (radius * Math.cos(theta));
        } else if (totalDist <= ((3 * length / 2) + (pi * radius))) {
            console.log(i + " hit 3");
            x = props.anchor.x - length + totalDist - (pi * radius);
            y = props.anchor.y - radius;
        } else if (totalDist <= ((3 * length / 2) + (2 * pi * radius))) {
            console.log(i + " hit 4");
            const theta = (totalDist - (3 * length / 2) - (pi * radius)) / radius;
            x = props.anchor.x + (length / 2)  + (radius * Math.sin(theta));
            y = props.anchor.y - (radius * Math.cos(theta));
        } else {
            console.log(i + " hit 5");
            console.log( (totalDist - ((3 * length / 2) + (2 * pi * radius))));
            x = props.anchor.x + distBetween;
            y = props.anchor.y + radius;
        }
        seatingLocations[props.bettingOrder[i]] = {x: x, y: y};
        totalDist += distBetween;
    }
    console.log("Table: " + socket.connected);
    return (
        <div className="table" style={style}>
            {
                props.bettingOrder.map((playerId) => {
                    const isHero = playerId === props.heroData.id;
                    return (
                        <Player
                            key={playerId}
                            keyId={playerId}
                            connected={ true
                            }
                            hero={isHero}
                            data={  
                                props.heroData
                            }
                            x={seatingLocations[playerId].x}
                            y={seatingLocations[playerId].y}
                        />
                    );
                })
            }
        </div>
    );
}

export default Table;