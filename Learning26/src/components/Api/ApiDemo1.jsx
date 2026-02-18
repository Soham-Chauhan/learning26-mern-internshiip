import React, { useState } from 'react'
import axios from 'axios'

export const ApiDemo1 = () => {

    const [message, setmessage] = useState("")
    const [users, setusers] = useState([])
    const [showTableHeader, setshowTableHeader] = useState(false)

    const getUsers = async() =>{
        const response = await axios.get("https://node5.onrender.com/user/user/")
        console.log(response)
        console.log(response.data)
        console.log(response.data.message)
        setmessage(response.data.message)
        console.log(response.data.data)
        setusers(response.data.data)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>API Demo 1</h1>
        <button className='btn btn-danger' onClick={()=>{getUsers()}} onFocus={()=>{setshowTableHeader(true)}}>GET</button>
        <h1>Message: {message}</h1>
        {/* {
            users.map((user) =>{
                return <li>{user.name}</li>
            })
        } */}

        <table className='table table-striped table-bordered table-hover table-sm'>
        {showTableHeader && (
            <thead className='thead-dark'>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>PASSWORD</th>
                    <th>AGE</th>
                </tr>
            </thead>
            )}
            <tbody>
                {
                    users.map((user)=>{
                        return <tr>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                            <td>{user.age}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
        
    </div>
  )
}
