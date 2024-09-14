import React from 'react'
import Header from '../Header/Header'
import './AnimeDetails.css'
import PopularAnime from './PopularAnime/PopularAnime'
export default function AnimeDetails() {
  return (
    <div className='animeDetails'>
        <Header />
        <PopularAnime/>
        <AnimeDetail />
    </div>
  )
}
