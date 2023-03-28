import { useContext } from 'react';
import { PlayerContext } from '../Player/Player';

function Stack (props) {
    const playerCtxt = useContext(PlayerContext);
    return (
        <div className="stack-container">
            <div className="stack">{playerCtxt.hand.stack.uncommitted}</div>
            <div className="committed">{playerCtxt.hand.stack.committed}</div>
        </div>
    );
}

export default Stack;