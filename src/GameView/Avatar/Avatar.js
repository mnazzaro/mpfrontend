import { useContext } from 'react';
import { PlayerContext } from '../Player/Player';
import blankAvatar from '../assets/blank_avatar.png';
import './avatar.css';

function Avatar (props) {
    const playerCtxt = useContext(PlayerContext);
    if (playerCtxt.connectionData.connected) {
        return (<img className="avatar" src={playerCtxt.cosmetic.avatar} alt={playerCtxt.cosmetic.name + "'s Avatar"} height="45px;"/>);
    } else {
        return (<img className="avatar" src={blankAvatar} alt="Awaiting Player"/>)
    }
}

export default Avatar;