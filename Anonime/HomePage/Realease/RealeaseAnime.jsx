import React from 'react'

import './RealeaseAnime.css'
const RealeaseAnime = (props) => {
    
    const {image, episode, nameAnime} = props;
  return (
   <div className='realeaseAnime'>
        <div className='imgRealeaseAnime'>
            <img className='imgAnime' src='./public/a1.png' alt="" />
        </div>
        <div className='episode'>
            <p>Episode</p>
        </div>
        <h4>Onepiece</h4>
    </div>
   
  )
}
export default RealeaseAnime;