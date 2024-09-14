import React from 'react'
import RealeaseAnime from './RealeaseAnime'
import './RealeaseAnimeList.css'

const RealeaseAnimeList = (props) => {
    const {animes = []} = props;
    const listAnime = animes.map((anime) => (<RealeaseAnime key={anime.id} episode = {anime.episode} nameAnime={anime.nameAnime} /> ) ) 
  return (
    <div className='realeaseAnimeList'>
        {listAnime}
    </div>
  )
}
export default RealeaseAnimeList;
