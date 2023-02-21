import { useContext } from 'react';
import { PlayerContext } from '../Player/Player';

function Stack (props) {
    const playerCtxt = useContext(PlayerContext);
    return (
        <div className="stack-container">
            <div className="stack">{playerCtxt.gameData.stack.uncommitted}</div>
            <div className="committed">{playerCtxt.gameData.stack.committed}</div>
        </div>
    );
}

export default Stack;