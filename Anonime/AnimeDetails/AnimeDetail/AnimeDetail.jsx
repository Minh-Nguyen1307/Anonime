import React from 'react'
import './AnimeDetail.css'
import PopularAnime from './PopularAnimes/PopularAnime'
import DescriptionAnime from './DescriptionAnime/DescriptionAnime'
export default function AnimeDetail() {
  return (
    <div className='animeDetail'>
        <div id='popularAnimeColumn' className="col">
            <DescriptionAnime/>
        </div>
        <div id='DescriptionAnimeColumn' className="col">
            <PopularAnime/>
        </div>
    </div>
  )
}
