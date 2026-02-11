import React, { useState } from 'react'

export const InputDemo1 = () => {

    const [Name, setName] = useState("")
    const [age, setAge] = useState("")

    const nameHandler = (event)=>{
        console.log(event.target.value)
        setName(event.target.value)
    }
    const ageHandler = (event)=>{
        console.log(event.target.value)
        setAge(event.target.value)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>InputDemo1</h1>

        <div>
            <label>Name</label>
            <input type='text' onChange={(event)=>{nameHandler(event)}}></input>
            {Name}
            <br /><br />
            
            <label>Age</label>
            <input type='text' onChange={(event)=>{ageHandler(event)}}></input>
            {age}


        </div>
    </div>
  )
}
