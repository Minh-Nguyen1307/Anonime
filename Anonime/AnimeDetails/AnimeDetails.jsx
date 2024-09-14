import React from 'react'
import Header from '../Header/Header'
import './AnimeDetails.css'

import AnimeDetail from './AnimeDetail/AnimeDetail'
export default function AnimeDetails() {
  return (
    <div className='animeDetails'>
        <Header />
        <AnimeDetail />
    </div>
  )
}
