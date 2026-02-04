import React from 'react'
import { Link } from 'react-router-dom'

export const NetflixShow = () => {
  return (
    <div style={{textAlign:"center"}}>
        <h1>NetflixShow</h1>
        <ul>
          <li>
            <Link to="/watch/naruto">Naruto</Link>
          </li>

           <li>
            <Link to="/watch/onepiece">One Piece</Link>
          </li>

           <li>
            <Link to="/watch/bleach">Bleach</Link>
          </li>
        </ul>
    </div>
  )
}
