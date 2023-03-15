import './card.css';
function Card (props) {
    return (<div className="card">{props.rank + props.suit}</div>);
}

export default Card;