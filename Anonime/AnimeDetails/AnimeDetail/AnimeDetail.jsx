import React from 'react'
import './AnimeDetail.css'
import PopularAnime from './PopularAnimes/PopularAnime'
import DescriptionAnime from './DescriptionAnime/DescriptionAnime'
export default function AnimeDetail(props) {
    const {image, nameAnime, episode, description} = props;
  return (
    <div className='animeDetail'>
        <div id='popularAnimeColumn' className="col">
            <DescriptionAnime image={image} nameAnime={nameAnime} episode={episode} description={description}/>
        </div>
        <div id='DescriptionAnimeColumn' className="col">
            <PopularAnime/>
        </div>
    </div>
  )
}
