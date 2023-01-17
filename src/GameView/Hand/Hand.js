import Card from "../Card/Card";

function Hand (props) {
    return (
        <div className="hand">
            {
                props.cards.map((card) => {
                    return (<Card rank={card.rank} suit={card.suit}/>);
                })
            }
        </div>
    );
}

export default Hand;