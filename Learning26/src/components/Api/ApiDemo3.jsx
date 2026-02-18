import axios from 'axios'
import React, { useState } from 'react'

export const ApiDemo3 = () => {

    const [comments, setcomments] = useState([])
    const [showTableHeader, setshowTableHeader] = useState(false)

    const getComments = async() =>{
        const response =  await axios.get("https://dummyjson.com/comments")
        console.log(response.data)
        setcomments(response.data.comments)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>API Demo 3</h1>
        <button className='btn btn-danger' onClick={getComments} style={{width:"70px"}} onFocus={()=>{setshowTableHeader(true)}}>GET</button>
        
        <table className="table table-bordered table-sm table-hover" style={{marginTop:"20px"}}>
            {showTableHeader && (
                <thead>
                <tr>
                    <th>ID</th>
                    <th>USER NAME</th>
                    <th>FULL NAME</th>
                    <th>LIKES</th>
                    <th>POSTID</th>
                    <th>BODY</th>
                </tr>
            </thead>
            )}
            
            <tbody>
                {
                    comments.map((comment)=>{
                        return <tr>
                            <td>{comment.user.id}</td>
                            <td>{comment.user.username}</td>
                            <td>{comment.user.fullName}</td>
                            <td>{comment.likes}</td>
                            <td>{comment.postId}</td>
                            <td>{comment.body}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
