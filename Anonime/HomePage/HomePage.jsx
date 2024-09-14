import React from 'react'
import Header from '../Header/Header'
import './HomePage.css'

import Explore from './Explore/Explore'
import Realease from './Realease/Realease'
export default function HomePage() {
  return (
    <div className='homePage'>
        <Header />
        <Explore />
        <Realease/>
    </div>
  )
}
