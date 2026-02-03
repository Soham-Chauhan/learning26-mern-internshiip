import React from 'react'

export const MapDemo2 = () => {

    let users=[
        {id:1, name:"soham", age:23, gender:"male"},
        {id:2, name:"nayan", age:21, gender:"male"},
        {id:3, name:"dhruvil", age:23, gender:"male"}
    ]
  return (
    <div>
      <h1>MapDemo2</h1>
      {
       users.map((user)=>{
       return <li>{user.id} {user.name} {user.age} {user.gender}</li>
       })
      }
  
      
    </div>
  )
}
