import React from 'react'
import { Link } from 'react-router-dom';
import './RealeaseAnime.css'
const RealeaseAnime = (props) => {
    
    const {image, episode, nameAnime} = props;
  return (
   <div className='realeaseAnime'>
        <div className='imgRealeaseAnime'>
        <img className='imgAnime' src={image} alt="" />
        </div>
        <div className='episode'>
            <p>Episode {episode}</p>
        </div>
        <Link to='AnimeDetails'><h4>{nameAnime}</h4></Link>
    </div>
   
  )
}
export default RealeaseAnime;