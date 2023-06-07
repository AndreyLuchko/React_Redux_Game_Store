import React from "react";
import { GameItem } from '../../components/game-item';
import './home-page.css';

const GAMES = [
    {
        image: '/game-covers/forza_5.jpeg',
        title: 'Forza Horizon 5',
        genres: ['Action', 'Adventure', 'Racing', 'Simulation', 'Sports'],
        price: 1999,
        video: 'https://www.youtube.com/embed/FYH9n37B7Yw',
        id: 1,
        description: "Your Ultimate Horizon Adventure awaits! Explore the vibrant open world landscapes of Mexico with limitless, fun driving action in the world’s greatest cars. Conquer the rugged Sierra Nueva in the ultimate Horizon Rally experience.",
    },
    {
        image: '/game-covers/battlefield_2042.jpg',
        title: 'Battlefield 2042',
        genres: ['Action', 'Adventure', 'Casual', 'Shooter'],
        video: 'https://www.youtube.com/embed/ASzOzrB-a9E',
        price: 1499,
        id: 2,
        description: 'Never back down in Season 5: New Dawn. Battlefield™ 2042 is a first-person shooter that marks the return to the iconic all-out warfare of the franchise.'
    },
    {
        image: '/game-covers/life_is_strange_true_colors.jpeg',
        title: 'Life is Strange True Colors',
        genres: ['Action', 'Adventure'],
        video: 'https://www.youtube.com/embed/b6CkzwVAr0M',
        price: 1399,
        id: 3,
        description: 'Alex Chen hides her "curse": the psychic power of Empathy, the ability to absorb the emotions of others. When her brother dies in a so-called accident, Alex must embrace her power to find the truth.'
    },
    {
        image: '/game-covers/gta_v.jpeg',
        title: 'Grand Theft Auto V',
        genres: ['Action', 'Adventure'],
        video: 'https://www.youtube.com/embed/QkkoHAzjnUs',
        price: 313,
        id: 4,
        description: 'Grand Theft Auto V for PC offers players the option to explore the award-winning world of Los Santos and Blaine County in resolutions of up to 4k and beyond, as well as the chance to experience the game running at 60 frames per second.'
    },
    {
        image: '/game-covers/rainbow_siege.jpeg',
        title: 'Tom Clancy\'s Rainbow Six® Siege',
        video: 'https://www.youtube.com/embed/6wlvYh0h63k',
        genres: ['Action', 'Shooter'],
        price: 119,
        id: 5,
        description: "Tom Clancy's Rainbow Six® Siege is an elite, tactical team-based shooter where superior planning and execution triumph."
    },
    {
        image: '/game-covers/assassins_creed_valhalla.png',
        title: "Assassin's Creed Valhalla",
        genres: ['Action', 'Adventure', 'RPG'],
        video: 'https://www.youtube.com/embed/ssrNcwxALS4',
        price: 915,
        id: 6,
        description: 'Become a legendary Viking on a quest for glory. Raid your enemies, grow your settlement, and build your political power.'
    },
];

export const HomePage = () => {
    return (
        <div className="home-page">
            { GAMES.map(game => <GameItem game={game} key={game.id}/>) }
        </div>
    )
}