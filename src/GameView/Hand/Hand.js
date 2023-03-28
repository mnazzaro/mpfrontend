import { useContext } from 'react';
import { PlayerContext } from '../Player/Player';
import Card from "../Card/Card";
import './hand.css';


function Hand (props) {
    const playerCtxt = useContext(PlayerContext);

    if (playerCtxt.connectionData.connected && playerCtxt.hand.inHand) {
        return (
            <div className="hand">
                {
                    playerCtxt.hand.map((card, i) => {
                        return (<Card key={i} rank={card.rank} suit={card.suit}/>);
                    })
                }
            </div>
        );
    }
    return (<div className="hand"></div>);
}

export default Hand;