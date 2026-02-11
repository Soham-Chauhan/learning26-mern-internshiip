import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
import { data } from 'react-router-dom'

export const FormDemo1 = () => {

    const {register,handleSubmit} = useForm()
    const [userData, setuserData] = useState({})
    const [isSubmited, setisSubmited] = useState(false)

    const submitHandler = (data)=>{
        console.log(data)
        setuserData(data)
        setisSubmited(true)
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>FormDemo1</h1>

    <div class="container mt-5">
    <div class="row justify-content-center">
    <div class="col-md-6">
      <div class="card shadow p-4">
         <form onSubmit={handleSubmit(submitHandler)} className="form-block">
            <div>
                <label>Name : </label>
                <input type="text" placeholder="enter name" {...register("name")}></input>
            </div>

             <div>
                <label>Age : </label>
                <input type="text" {...register("age")}></input>
            </div>

             <div>
                <label>City : </label>
                <input type="text" {...register("city")}></input>
            </div>

             <div>
                <label>Gender</label> <br></br>
                Male : <input type="radio" value="male" {...register("gender")}></input>
                Female : <input type="radio" value="female" {...register("gender")}></input> <br></br><br></br>
            </div>

            <div>
                <label>Hobbies</label> <br></br>
                Cricket<input type="checkbox" value="cricket " {...register("hobbies")}></input>&nbsp;

                 Travelling<input type="checkbox" value="travelling " {...register("hobbies")}></input>&nbsp;

                  Watch Movie<input type="checkbox" value="watch movie" {...register("hobbies")}></input>&nbsp; <br></br><br></br>
            </div>

            <div>
                <input type="submit"></input>
            </div>
        </form>
      </div>
    </div>
  </div>
</div>

        {
            isSubmited == true && <div>
                <h1>Output</h1>
                <h6>Name = {userData.name}</h6>
                <h6>Age = {userData.age}</h6>
                <h6>City = {userData.city}</h6>
                <h6>Gender = {userData.gender}</h6>
                <h6>Hobbies = {userData.hobbies}</h6>
            </div>    
        }
    </div>
  )
}
