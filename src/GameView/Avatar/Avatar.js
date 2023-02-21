import { useContext } from 'react';
import { PlayerContext } from '../Player/Player';
import blankAvatar from '../assets/blank_avatar.png';

function Avatar (props) {
    const playerCtxt = useContext(PlayerContext);
    if (playerCtxt.connected) {
        return (<img src={playerCtxt.cosmetic.avatar} alt={playerCtxt.cosmetic.name + "'s Avatar"}/>);
    } else {
        return (<img src={blankAvatar} alt="Awaiting Player"/>)
    }
}

export default Avatar;