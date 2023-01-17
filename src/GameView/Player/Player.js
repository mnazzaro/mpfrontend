import React from 'react';
import blankAvatar from '../assets/blank_avatar.png';
import Avatar from '../Avatar/Avatar';
import PublicName from '../PublicName/PublicName';
import Hand from '../Hand/Hand';
import Stack from '../Stack/Stack';

class Player extends React.Component {

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
        if (this.state.connected) {
            return (
                <div className="player-container connected">
                    <Avatar 
                        src={this.state.cosmetic.avatar}
                        alt={this.state.cosmetic.name + "'s Avatar"}
                    />
                    <PublicName name={this.state.cosmetic.name}/>
                    <Hand cards={this.state.gameData.hand}/>
                    <Stack 
                        committed={this.state.gameData.stack.committed}
                        uncommitted={this.state.gameData.stack.uncommitted}
                    />
                </div>
            );
        } else {
            <div className="player-container disconnected">
                <Avatar src={blankAvatar} alt="Awaiting Player"/>
            </div>
        }
    }
}

export default Player;