import React, { useContext } from 'react';
import Player from '../Player/Player';
import { useSelector } from 'react-redux';
import { SocketContext } from '../../SocketContext';
import './table.css';

function Table (props) {

    const window = useSelector((state) => state.view.window);
    const hero = useSelector((state) => state.game.hero);
    const players = useSelector((state) => state.game.players)

    const pi = 3.14159;

    const anchor = {x: window.width / 2, y: window.height / 2}
    const length = window.width / 4;
    const radius = window.height / 3.2;
    const perimeter = (2 * length) + (2 * pi * radius);
    const bettingOrder = players.length > 0 ? 
                            players
                                .map((p) => p.seat)
                                .push(hero.seat)
                                .sort()
                            : [hero.seat];
    const n = bettingOrder.length;
    const distBetween = perimeter / n;
    let totalDist = 0;
    let seatingLocations = {};
    let x = 0;
    let y  = 0;

    const socket = useContext(SocketContext);

    const style = {
        position: 'absolute',
        // width: 'fit-content',
        // height: 'auto',
        // margin: '0 auto',
    };

    // This just uses a bunch of trig to arrange the players in a poker table shape
    // The shape is two semi circles facing each other connected by straight lines
    for (let i = 0; i < n; i++) {
        if (totalDist <= (length / 2)) {
            x = anchor.x - totalDist;
            y = anchor.y + radius;
        } else if (totalDist <= ((length / 2) + (pi * radius))) {
            const theta = (totalDist - (length / 2)) / radius;
            x = anchor.x - (length / 2)  - (radius * Math.sin(theta));
            y = anchor.y + (radius * Math.cos(theta));
        } else if (totalDist <= ((3 * length / 2) + (pi * radius))) {
            x = anchor.x - length + totalDist - (pi * radius);
            y = anchor.y - radius;
        } else if (totalDist <= ((3 * length / 2) + (2 * pi * radius))) {
            const theta = (totalDist - (3 * length / 2) - (pi * radius)) / radius;
            x = anchor.x + (length / 2)  + (radius * Math.sin(theta));
            y = anchor.y - (radius * Math.cos(theta));
        } else {
            x = anchor.x + distBetween;
            y = anchor.y + radius;
        }
        seatingLocations[bettingOrder[i]] = {x: x, y: y};
        totalDist += distBetween;
    }
    return (
        <div className="table" style={style}>
            {
                bettingOrder.map((playerId) => {
                    const isHero = playerId === hero.seat;
                    console.log(seatingLocations[playerId]);
                    return (
                        <Player
                            key={playerId}
                            keyId={playerId}
                            hero={isHero}
                            x={seatingLocations[playerId].x}
                            y={seatingLocations[playerId].y}
                        />
                    );
                })
            }
        </div>
    );
}

export default Table;