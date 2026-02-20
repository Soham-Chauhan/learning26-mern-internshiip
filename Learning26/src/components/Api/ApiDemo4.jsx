import React from 'react'
import axios from 'axios'

export const ApiDemo4 = () => {

    const addUser = async() =>{
        const userObj = {
            name:"ayush",
            age:23,
            email:"ayush@gmail.com",
            password:"ayush123",
            isActive:true
        }

         try{
        const res = await axios.post("https://node5.onrender.com/user/user/",userObj)
        console.log(res)
        console.log(res.data)
        }catch(err){
            console.log(err)
            alert("error while adding user")
        }
    }

  return (
    <div style={{textAlign: "center"}}>
        <h1>Post API Demo using simple object</h1>
        <button onClick={()=>{addUser()}}>ADD</button>
    </div>
  )
}
