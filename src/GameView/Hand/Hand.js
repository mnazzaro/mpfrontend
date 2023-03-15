import { useContext } from 'react';
import { PlayerContext } from '../Player/Player';
import Card from "../Card/Card";
import './hand.css';


function Hand (props) {
    const playerCtxt = useContext(PlayerContext);
    return (
        <div className="hand">
            {
                playerCtxt.gameData.hand.map((card, i) => {
                    return (<Card key={i} rank={card.rank} suit={card.suit}/>);
                })
            }
        </div>
    );
}

export default Hand;