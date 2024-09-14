import React from 'react'
import './DescriptionAnime.css'
const DescriptionAnime = (props) => {
  const {image, nameAnime, episode, description } = props;
  return (
    <div className='descriptionAnime'>
        <h2>{nameAnime} - Episode {episode}</h2>
        <div className='detailDescriptionAnime'>
          <div className='grid-className'>
            <img src={image} alt="" />
          </div>
          <div className='grid-className'>
            <h4>Type :</h4>
            <p>Tv</p>
            <h4>Status :</h4>
            <p>Ongoing</p>
            <h4>Studios :</h4>
            <p>Anime</p>
            <h4>Genres :</h4>
            <p>Action</p>
          </div>
        </div>
        <div className='sypnosis'>
            <h4>Sypnosis</h4>
            <p>{description}</p>
          </div>

    </div>
  )
}
export default DescriptionAnime;
