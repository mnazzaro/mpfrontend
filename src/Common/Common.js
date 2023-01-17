import Banner from "../Banner/Banner";
import Game from "../GameView/Game/Game";
import HeroPfp from "../assets/hero.png";

function Common (props) {
    return (
        <div className='common'>
            <Banner/>
            <Game
                connectionString="http://localhost:8002"
                gameOver={() => console.log("Game Over")}
                heroData={{
                    id: 1,
                    cosmetic: {
                        name: "Hero",
                        avatar: HeroPfp // Get hero data - TODO: implement data stores for recovery/reconnection
                    },
                    gameData: {
                        hand: [
                            {rank: 'A', suit: 'h'},
                            {rank: 'A', suit: 'c'}
                        ],
                        stack: {
                            committed: 0,
                            uncommitted: 2000
                        }
                    }
                }}
                view={{
                    width: window.innerWidth,
                    height: window.innerHeight
                }}
            />
        </div>
    );
}

export default Common;