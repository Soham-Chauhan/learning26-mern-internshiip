import React, { use } from 'react'
import { useParams } from 'react-router-dom'

export const Watch = () => {

    // const animeName = useParams().name;
    const movieName = useParams().name;

  return (
    <div style={{textAlign:"center"}}>
        {/* <h1>Watching.....{animeName}</h1> */}
        <h1>Watching.....{movieName}</h1>
    </div>
  )
}
