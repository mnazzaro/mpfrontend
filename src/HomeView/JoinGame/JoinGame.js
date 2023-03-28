import { useDispatch } from "react-redux";
import './joinGame.css';

function JoinGame (props) {
    const dispatch = useDispatch();
    const joinGame = async () => {
        
        const response = await fetch('http://127.0.0.1:5000/login', {
            method: "POST",
            cache: "no-store", // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
              "Content-Type": "application/json",
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
                email: 'marknazzaro2@gmail.com',
                password: 'passw0rD!' // TODO: This will be replaced with cookies later, so no sweat
            })
        });

        response.json().then((data) => {
            if (data.result) {
                dispatch({ type: 'app/joinGame', payload: data.socketAddress });
            } else {
                alert ("Login Attempt Failed");
            }
        });
    }

    return (<div id="join-button" onClick={joinGame}>Join Game</div>);
}

export default JoinGame;