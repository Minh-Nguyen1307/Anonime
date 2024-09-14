import React from 'react'
import './PopularAnime.css'
import HeaderPopularAnime from './HeaderPopularAnime'
import ListPopularAnime from './ListPopularAnime'
export default function PopularAnime() {
  return (
    <div className='popularAnime'>
        <HeaderPopularAnime />
        <ListPopularAnime/>
    </div>
  )
}
