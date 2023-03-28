import { createContext, useState } from 'react';
import { useStore } from 'react-redux';
import Avatar from '../Avatar/Avatar';
import PublicName from '../PublicName/PublicName';
import Hand from '../Hand/Hand';
import Stack from '../Stack/Stack';

function Player (props) {

    const store = useStore();

    const cardContainerStyle = {
        position: 'absolute',
        left: props.x - 25, // This is to deal with the border size, should prob be put in redux
        top: props.y - 25,
        transform: 'translateX(-50%) translateY(-50%)',
    }
    const style = {
        position: 'relative',
        height: '3vw',
        width: '9vw',
        backgroundColor: 'lightgray',

        borderRadius: '5px',
        borderColor: 'black',
        display: 'flex',
        justifyContent: 'space-around',

    }
    const [context, setContext] = useState(
        props.hero ?
        {
            ...(store.getState().game.hero),
            ...(store.getState().connection)
        } : store.getState().players.filter((p) => p.seat === props.keyId)
    );

    return (
        <PlayerContext.Provider value={context}>
            <div className="card-container" style={cardContainerStyle}>
                <Hand/>
                <div className="player-container connected" style={style}>
                    <Avatar/>
                    <PublicName/>
                    <Stack/>
                </div>
            </div>
        </PlayerContext.Provider>
    );
    
}

const PlayerContext = createContext();

export { PlayerContext };
export default Player;
