import { Component, createContext, useState } from 'react';
import Avatar from '../Avatar/Avatar';
import PublicName from '../PublicName/PublicName';
import Hand from '../Hand/Hand';
import Stack from '../Stack/Stack';

class Player extends Component {

    constructor (props) {
        super(props);
        this.state = {
            cosmetic: props.connected ? props.data.cosmetic : null,
            connected: props.connected,
            hero: props.hero,
            gameData: props.connected ? props.data.gameData : null
        }
    }

    render () {
        // if (this.state.connected) {
        //     return (
                
        //         <div className="player-container connected">
        //             <Avatar 
        //                 src={this.state.cosmetic.avatar}
        //                 alt={this.state.cosmetic.name + "'s Avatar"}
        //             />
        //             <PublicName name={this.state.cosmetic.name}/>
        //             <Hand cards={this.state.gameData.hand}/>
        //             <Stack 
        //                 committed={this.state.gameData.stack.committed}
        //                 uncommitted={this.state.gameData.stack.uncommitted}
        //             />
        //         </div>
        //     );
        // } else {
        //     <div className="player-container disconnected">
        //         <Avatar src={blankAvatar} alt="Awaiting Player"/>
        //     </div>
        // }
        const style = {
            position: 'absolute',
            left: this.props.x,
            top: this.props.y
        }
        console.log (this.props.keyId + ": " + this.props.x + ", " + this.props.y);
        return (
            <PlayerContext.Provider value={this.state}>
                {
                    this.state.connected ?
                        <div className="player-container connected" style={style}>
                            <Avatar/>
                            <PublicName/>
                            <Hand/>
                            <Stack/>
                        </div>
                    :
                        <div className="player-container disconnected" style={style}>
                            <Avatar/>
                        </div>
                }
            </PlayerContext.Provider>
        );
    }
}

const PlayerContext = createContext();

// function Player (props) {
//     const [playerState, setPlayerState] = useState(
//         {
//             cosmetic: props.connected ? props.data.cosmetic : null,
//             connected: props.connected,
//             hero: props.hero,
//             gameData: props.connected ? props.data.gameData : null
//         }
//     );
//     console.log(props.connected);
//     return (
//         <PlayerContext.Provider value={playerState}>
//             if (playerState.connected) {
//                 <div className="player-container connected">
//                     <Avatar/>
//                     <PublicName/>
//                     <Hand/>
//                     <Stack/>
//                 </div>
//             } else {
//                 <div className="player-container disconnected">
//                     <Avatar/>
//                 </div>
//             }
//         </PlayerContext.Provider>
//     );
// }

export { PlayerContext };
export default Player;
