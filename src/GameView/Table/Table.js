import React from 'react';
import Player from '../Player/Player';

class Table extends React.Component {
    
    constructor(props) {
        super (props);
        this.state = {
            bettingOrder: props.bettingOrder,
            connectedPlayerData: {}, // json object structured like: { 1: {...cosmetic}} where 1 is the id
            heroData: props.heroData, // json object structured like: { id: 1, cosmetic: {...}}
        }
    }

    componentDidMount () {
        this.props.socket.on('load_player', this.onLoadPlayer);
    }

    onLoadPlayer = (playerData) => {
        const temp_pd = this.state.connectedPlayerData;
        temp_pd[playerData['id']] = playerData['id'];
        this.setState({ connectedPlayerData: temp_pd });
    }
    
    render () {
        const pi = 3.14159;
        const n = this.state.bettingOrder.length;
        const perimeter = 2 * (this.props.sLength + pi * this.props.radius);
        const distBetween = perimeter / n;
        let totalDist = 0;
        let seatingLocations = {};
        let x = 0;
        let y  = 0;
        for (let i = 0; i < n; i++) {
            if (this.state.bettingOrder[i] == this.state.heroData.id) {
                totalDist += distBetween;
                seatingLocations[this.state.bettingOrder[i]] = this.props.anchor;
                continue;
            }
            // Check to see if we are on the left semicircle
            if (totalDist > (this.props.sLength / 2) && totalDist < ((this.props.sLength / 2) + (pi * this.props.radius)))  { 
                const theta = ((totalDist - this.props.sLength) / 2 * pi * this.props.radius) / (2 * pi);
                x = this.props.anchor.x - (this.props.sLength / 2) - (this.props.radius * Math.sin(theta));
                y = this.props.anchor.y + (this.props.radius * Math.cos(theta));
            // Check to see if we are on the right semicircle
            } else if (totalDist > (this.props.sLength * 1.5 + (pi * this.props.radius)) && totalDist < (perimeter - (this.props.sLength / 2))) {
                const theta = ((totalDist - (this.props.sLength * 1.5 +  (pi * this.props.radius))) / 2 * pi * this.props.radius) / (2 * pi);
                x = this.props.anchor.x + (this.props.sLength / 2) + (this.props.radius * Math.sin(theta));
                y = this.props.anchor.y + (2 * this.props.radius) - (this.props.radius * Math.cos(theta));
            // Check to see if we are on flat bit left of the anchor
            } else if (totalDist <= this.props.sLength / 2) {
                x = this.props.anchor.x - totalDist;
                y = this.props.anchor.y;
            // Check to see if we are on the top flat bit
            } else if (totalDist >= ((this.props.sLength / 2) + (pi * this.props.radius)) && totalDist <= ((this.props.sLength * 1.5) + (pi * this.props.radius))) {
                x = this.props.anchor.x + totalDist - ((this.props.sLength / 2) + pi * this.props.radius);
                y = this.props.anchor.y + 2 * this.props.radius;
            // Check to see if we are on the flat bit right of the anchor
            } else {
                x = this.props.anchor.x + perimeter - totalDist;
                y = this.props.anchor.y;
            }
            seatingLocations[this.state.bettingOrder[i]] = {x: x, y: y};
        }
        return (
            <div className="table">
                {
                    this.state.bettingOrder.map((playerId) => {
                        const isHero = playerId === this.state.heroData.id;
                        return (
                            <Player
                                connected={ isHero ? 
                                    this.props.socket.connected : 
                                    playerId in this.state.connectedPlayerData
                                }
                                hero={isHero}
                                data={ isHero ?
                                    this.state.heroData :
                                    this.state.connectedPlayerData[playerId]  // is this undefined? We're good as long as no crash
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
}

export default Table;