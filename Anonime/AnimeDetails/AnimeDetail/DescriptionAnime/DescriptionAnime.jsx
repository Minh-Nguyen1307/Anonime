import React from 'react'
import './DescriptionAnime.css'
const DescriptionAnime = () => {
  return (
    <div className='descriptionAnime'>
        <h2>One Piece - Episode</h2>
        <div className='detailDescriptionAnime'>
          <div className='grid-className'>
            <img src="./public/a1.png" alt="" />
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
            <p>Gol D. Roger was known as the "Pirate King," the strongest and most infamous being to have sailed the Grand Line. The capture and execution of Roger by the World Government brought a change throughout the world. His last words before his death revealed the existence of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece—which promises an unlimited amount of riches and fame—and quite possibly the pinnacle of glory and the title of the Pirate King.</p>
          </div>

    </div>
  )
}
export default DescriptionAnime;
