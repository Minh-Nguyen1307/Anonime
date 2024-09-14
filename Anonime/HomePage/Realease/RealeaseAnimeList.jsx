import React from 'react'
import RealeaseAnime from './RealeaseAnime'
import './RealeaseAnimeList.css'

const RealeaseAnimeList = (props) => {
    const {animes = []} = props;
    const listAnime = animes.map((anime) => (<RealeaseAnime key={anime.id} image={anime.image} episode = {anime.episode} nameAnime={anime.nameAnime} description={anime.description} /> ) ) 
  return (
    <div className='realeaseAnimeList'>
        {listAnime}
    </div>
  )
}
export default RealeaseAnimeList;
