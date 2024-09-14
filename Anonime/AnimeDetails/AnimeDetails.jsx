import React from 'react'
import { useLocation } from 'react-router-dom';
import Header from '../Header/Header'
import './AnimeDetails.css'


import AnimeDetail from './AnimeDetail/AnimeDetail'
export default function AnimeDetails() {
  const location = useLocation();
  const {state} = location;
  const {image, episode, nameAnime, description} = state || {};
  return (
    <div className='animeDetails'>
        <Header />
        <AnimeDetail image={image} nameAnime={nameAnime} episode={episode} description={description} />
    </div>
  )
}
