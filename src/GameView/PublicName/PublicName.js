import { useContext } from 'react';
import { PlayerContext } from '../Player/Player';

function PublicName (props) {
    const playerCtxt = useContext(PlayerContext);
    return (<span>{playerCtxt.cosmetic.name}</span>);
}

export default PublicName;