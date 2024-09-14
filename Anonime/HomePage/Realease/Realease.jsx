import React from 'react'
import RealeaseHeader from './RealeaseHeader'
import RealeaseAnimeList from './RealeaseAnimeList'
import { useState } from 'react'

const Realease = () => {
    const anime = [
        {
            id: 1,
            image: "./public/One-piece 1.png",
            episode: "1018",
            nameAnime: "One piece",
        },
        {
            id: 2,
            image: "./public/boruto.png",
            episode: "250",
            nameAnime: "Boruto",
        },
        {
            id: 3,
            image: "./public/spy1.png",
            episode: "07",
            nameAnime: "Spy Family",
        },
        {
            id: 4,
            image: "./public/a1.png",
            episode: "28",
            nameAnime: "Kyoujin",
        },
        {
            id: 5,
            image: "./public/a2.png",
            episode: "28",
            nameAnime: "Tsubasa",
        },
        {
            id: 6,
            image: './public/a3.png',
            episode: "28",
            nameAnime: "Ball",
        },
    ];
    const [animes, setAnimes] = useState(anime);
  return (
    <div>
        <RealeaseHeader />
        <RealeaseAnimeList animes = {animes} />
    </div>
  )
}
export default Realease;
