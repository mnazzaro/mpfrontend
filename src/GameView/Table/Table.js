import React, { useContext } from 'react';
import Player from '../Player/Player';
import { useStore } from 'react-redux';
import { SocketContext } from '../../SocketContext';

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
    const length = store.getState().connect.view.width;
    const radius = store.getState().connect.view.height / 2;
    const n = 3; // TODO
    const perimeter = 2 * (length + pi * radius);
    const distBetween = perimeter / n;
    let totalDist = 0;
    let seatingLocations = {};
    let x = 0;
    let y  = 0;
    console.log("Length: " + length + ", Radius: " + radius);
    const socket = useContext(SocketContext);
    for (let i = 0; i < n; i++) {
        // if (props.bettingOrder[i] === props.heroData.id) {
        //     seatingLocations[props.bettingOrder[i]] = props.anchor;
        //     continue;
        // }
        // Check to see if we are on the left semicircle
        if (totalDist > (length / 2) && totalDist < ((length / 2) + (pi * radius)))  { 
            const theta = (totalDist - (length / 2)) / (radius);
            x = props.anchor.x - (length / 2) - (radius * Math.sin(theta));
            y = props.anchor.y + (radius * Math.cos(theta));
            console.log(i + " hit 1");
        // Check to see if we are on the right semicircle
        } else if (totalDist > (length * 1.5 + (pi * radius)) && totalDist < (perimeter - (length / 2))) {
            const theta = ((totalDist - (length * 1.5 +  (pi * radius))) / 2 * pi * radius) / (2 * pi);
            x = props.anchor.x + (length / 2) + (radius * Math.sin(theta));
            y = props.anchor.y + (2 * radius) - (radius * Math.cos(theta));
            console.log(i + " hit 2");
        // Check to see if we are on flat bit left of the anchor
        } else if (totalDist <= length / 2) {
            x = props.anchor.x - totalDist;
            y = props.anchor.y;
            console.log(i + " hit 3");
        // Check to see if we are on the top flat bit
        } else if (totalDist >= ((length / 2) + (pi * radius)) && totalDist <= ((length * 1.5) + (pi * radius))) {
            x = props.anchor.x + totalDist - ((length / 2) + pi * radius);
            y = props.anchor.y + 2 * radius;
            console.log(i + " hit 4");
        // Check to see if we are on the flat bit right of the anchor
        } else {
            x = props.anchor.x + perimeter - totalDist;
            y = props.anchor.y;
            console.log(i + " hit 5");
        }
        seatingLocations[props.bettingOrder[i]] = {x: x, y: radius * 2 - y};
        totalDist += distBetween;
    }
    console.log("Table: " + socket.connected);
    return (
        <div className="table">
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