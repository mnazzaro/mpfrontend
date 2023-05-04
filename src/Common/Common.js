import Banner from "../Banner/Banner";
import Game from "../GameView/Game/Game";
import Login from "../Login/Login";
import JoinGame from "../HomeView/JoinGame/JoinGame";

import { useSelector } from "react-redux";

import './common.css';

function Common (props) {
    const common = <Banner/>;
    let uncommon;

    const currentView = useSelector ((state) => state.app.currentView);

    switch (currentView) {
        case 'login':
            uncommon = <Login action='/login'/>;
            break;
        case 'game':
            uncommon = <Game connectionString="http://127.0.0.1:5000"/>;
            break;
        case 'home':
            uncommon = <JoinGame/>;
            break;
        default:
            uncommon = <span>Unknown application view. Please reload the page.</span>
            break;
    }

    return (
        <div className="content-inside-border">
            <div className='common'>
                {common}
            </div>
            {uncommon}
        </div>
    );
}

export default Common;