import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'
export default function Header() {
  return ( 
    <div className="header">
        <Link to ='/'><h1>Anonime</h1></Link>
        <p>Home</p>
        <p>List anime</p>
        <form className="d-flex" role="search">
            <input id="formAnime" className="form-control me-2" type="search" placeholder="Search anime or movie" aria-label="Search" />
        </form>
    </div>
  )
}
