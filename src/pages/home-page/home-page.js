import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGames } from "../../redux/games/reducer";
import { GameItem } from '../../components/game-item';
import './home-page.css';

export const HomePage = () => {
    const dispatch = useDispatch();
    const games = useSelector(state => state.games.games);

    useEffect(() => {
        dispatch(fetchGames());
        // eslint-disable-next-line
    }, []);

    return (
        <div className="home-page">
            {
                games.map(game => (<GameItem game={game} key={game.id} />))
            }
        </div>
    )
}