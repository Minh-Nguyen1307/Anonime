import React from 'react'

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
        <h4>{nameAnime}</h4>
    </div>
   
  )
}
export default RealeaseAnime;