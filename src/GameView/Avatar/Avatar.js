import { useContext } from 'react';
import { PlayerContext } from '../Player/Player';
import blankAvatar from '../assets/blank_avatar.png';
import './avatar.css';

function Avatar (props) {
    const playerCtxt = useContext(PlayerContext);
    if (playerCtxt.connected) {
        return (<img id="avatar" src={playerCtxt.cosmetic.avatar} alt={playerCtxt.cosmetic.name + "'s Avatar"} height="45px;"/>);
    } else {
        return (<img src={blankAvatar} alt="Awaiting Player"/>)
    }
}

export default Avatar;