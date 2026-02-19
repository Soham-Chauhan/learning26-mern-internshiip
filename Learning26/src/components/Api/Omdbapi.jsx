import axios from 'axios'
import React, { useState } from 'react'
import { MoviesDetails } from './MoviesDetails'
// import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';




export const Omdbapi = () => {

    const [showMovies, setshowMovies] = useState([])
    // const navigate = useNavigate();
    
    const searchMovies = async() =>{
        const res = await axios.get("https://www.omdbapi.com/?apikey=c379941e&s=Avengers")
        console.log(res.data.Search)
        setshowMovies(res.data.Search)
    }

//     const handleView = (id) => {
//         navigate(`/moviesdetails/${id}`);
//   }

  return (
    <div style={{textAlign:"center"}}>
        <h1>OMDB API DEMO</h1>
         <button className='btn btn-danger' onClick={searchMovies} style={{width:"70px"}}>GET</button>


         <div style={{
            display:"grid",
            gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",
            gap:"20px",
            padding:"20px"
         }}>

            {
               showMovies?.map((showMovie) => (
                        <div style={{
                            border: "1px solid #ddd",
                            borderRadius: "10px",
                            padding: "10px",
                            boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
                        }}>
                            <img 
                                src={showMovie.Poster} 
                                style={{ height: "250px", width: "100%", objectFit: "cover", borderRadius: "8px" }}
                            />
                            <div>
                                <h5>{showMovie.Title}</h5>
                                <p><strong>Year:</strong> {showMovie.Year}</p>
                                
                                {/* <button onClick={() => handleView(showMovie.imdbID)}>Details</button> */}
                                
                                    <Link to={`/moviesdetails/${showMovie.imdbID}`}>
                                        <button>details</button>
                                    </Link>
                            
                            </div>
                            
                        </div>
                    ))
            }
         </div>
    </div>
  )
}
