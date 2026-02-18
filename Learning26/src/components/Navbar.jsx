import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

    {/* <a class="navbar-brand" href="/navabar">Navbar</a> */}
    <Link className="navbar-brand" to="/">Navbar</Link>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    {/* <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/netflixhome">NetHome <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/netflixshow">NetShow</a>
      </li>
    </ul> */}

    <ul className="navbar-nav mr-auto">
      {/* <li className="nav-item active">
        <Link className="nav-link" to="/netflixhome">NetHome </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/netflixshow">NetShow </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/netflixmovies">NetMovies </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About </Link>
      </li> */}
       {/* <li className="nav-item">
        <Link className="nav-link" to="/functiondemo">FunctionDemo </Link>
      </li>
       <li className="nav-item">
        <Link className="nav-link" to="/usestatedemo1">UseStateDemo1 </Link>
      </li>
       <li className="nav-item">
        <Link className="nav-link" to="/usestatedemo2">UseStateDemo2 </Link>
      </li>
     <li className="nav-item">
        <Link className="nav-link" to="/usestatedemo3">UseStateDemo3 </Link>
      </li> */}
       <li className="nav-item">
        <Link className="nav-link" to="/dropdown">Dropdown </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/employee">Employee </Link>
      </li>
     <li className="nav-item">
        <Link className="nav-link" to="/inputdemo1">InputDemo1 </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/formdemo1">FormDemo1 </Link>
      </li>
     
         <li className="nav-item">
        <Link className="nav-link" to="/formdemo2">FormDemo2 </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/formdemo3">FormDemo3 </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/formdemo4">FormDemo4 </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/formdemo5">FormDemo5 </Link>
      </li>
       <li className="nav-item">
        <Link className="nav-link" to="/passwordvalidation">PasswordValidation </Link>
      </li>
       <li className="nav-item">
        <Link className="nav-link" to="/apidemo1">ApiDemo1</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/apidemo2">ApiDemo2</Link>
      </li>
       <li className="nav-item">
        <Link className="nav-link" to="/apidemo3">ApiDemo3</Link>
      </li>
      
    </ul>
    
  </div>
</nav>
    </div>
  );
};
