import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import HomePage from '../HomePage/HomePage'
import AnimeDetails from '../AnimeDetails/AnimeDetails';

function App() {
  const [count, setCount] = useState(0)

  return (
  <Router>
    <Routes>
      <Route path="/" element={
          <>
            <HomePage />
          </>
}/>
      <Route path="/AnimeDetails" element={
          <>
            <AnimeDetails />
          </>
}/>
    </Routes>
  </Router>
  )
}

export default App
