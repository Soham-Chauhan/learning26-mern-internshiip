import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
// import "../../assets/css/MoviesDetails.css"




export const MoviesDetails = () => {

  const { id } = useParams()
  const [movie, setmovie] = useState(null)

  const fetchMovie = async () => {
    const response = await axios.get(
      `https://www.omdbapi.com/?apikey=c379941e&i=${id}`
    )
    setmovie(response.data)
  }

  if (movie === null) {
  fetchMovie()
}

  return (
    <div style={{ textAlign: "center" }}>

      <h2>Movie ID: {id}</h2>

      {/* <button onClick={fetchMovie}>Load Movie</button> */}

      {movie ? (
      <div>
        <img src={movie.Poster} alt={movie.Title} />
        <h1>{movie.Title}</h1>
        <p><b>Year:</b> {movie.Year}</p>
        <p><b>Rated:</b> {movie.Rated}</p>
        <p><b>Released:</b> {movie.Released}</p>
        <p><b>Runtime:</b> {movie.Runtime}</p>
        <p><b>Genre:</b> {movie.Genre}</p>
        <p><b>Director:</b> {movie.Director}</p>
        <p><b>Writer:</b> {movie.Writer}</p>
        <p><b>Actors:</b> {movie.Actors}</p>
        <p><b>Language:</b> {movie.Language}</p>
        <p><b>Country:</b> {movie.Country}</p>
        <p><b>Awards:</b> {movie.Awards}</p>
        <p><b>Plot:</b> {movie.Plot}</p>
      </div>
    ) : (
      <h2>Loading...</h2>
    )}
    </div>
  )
}
