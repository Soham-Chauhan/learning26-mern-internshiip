import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

export const ApiDemo5 = () => {

    const {register,handleSubmit} = useForm()

    const submitHandler = async(data) =>{
        alert("form submitted...")
        console.log(data)

            try{
                const res = await axios.post("https://node5.onrender.com/user/user/",data)
                console.log(res)
                console.log(res.data)
            }catch(err){
                 console.log(err)
                 alert("error while adding user")
        }
    }
   
  return (
    <div style={{textAlign:"center"}}>
        <h1>Form data storing in API</h1>

        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>Name :</label>
                <input type="text" placeholder="Enter Name" {...register("name")}/> 
            </div>

            <div>
                <label>Age :</label>
                <input type="number" placeholder="Enter Age" {...register("age")}/>
            </div>

            <div>
                <label>Email :</label>
                <input type="email" placeholder="Enter Email" {...register("email")}/>
            </div>

            <div>
                <label>Password :</label>
                <input type="password" placeholder="Enter Password" {...register("password")}/>
            </div>

            <div>
                isActive<input type="checkbox" value="isActive" {...register("activity")}/>
            </div>

            <button type='submit'>Add User</button>
        </form>
    </div>
  )
}
