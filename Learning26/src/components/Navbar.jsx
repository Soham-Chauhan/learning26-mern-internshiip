import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

    {/* <a class="navbar-brand" href="/navabar">Navbar</a> */}
    <Link class="navbar-brand" to="/">Navbar</Link>

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    {/* <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/netflixhome">NetHome <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/netflixshow">NetShow</a>
      </li>
    </ul> */}

    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" to="/netflixhome">NetHome </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/netflixshow">NetShow </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/about">About </Link>
      </li>
     
        
      
    </ul>
    
  </div>
</nav>
    </div>
  );
};
