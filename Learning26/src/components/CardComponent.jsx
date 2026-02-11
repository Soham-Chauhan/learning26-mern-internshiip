import React from 'react'


export const CardComponent = (props) => {
  return (
    <div>
        <h1>CardComponent</h1>
        {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"/> */}

   <div class="container mt-5">
  <div class="card" style={{width:"16 rem"}}>
    <img src="https://images.unsplash.com/photo-1695897706183-5295269554b9?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFpc3klMjBmbG93ZXJ8ZW58MHx8MHx8fDA%3D" class="card-img-top" alt="Card image" style={{height:"200px", width:"200px"}}/>
    <div class="card-body">
      <h5 class="card-title">{props.title || "Title"}</h5>
      <p class="card-text">
        {props.desc || "description"}
      </p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</div>

    </div>
  )
}
