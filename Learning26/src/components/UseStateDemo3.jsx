import React, { useState } from 'react'

export const UseStateDemo3 = () => {
    
    const [users, setUsers] = useState(["parth","raj"])

    const addUser = ()=>{
        setUsers([...users,"abc"])
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>UseStateDemo3</h1>
        {
            users.map((user)=>{
                return <li>{user}</li>
            })
        }
        <button onClick={addUser}>add</button>
    </div>
  )
}
