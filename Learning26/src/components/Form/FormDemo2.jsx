import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo2 = () => {

    const {register,handleSubmit,formState:{errors}} = useForm()
    // errors ---> {}
    console.log("errors....",errors)

    const submitHandler = (data) =>{
        alert("form is submitted....")
        console.log(data);
    }

    const validationSchema = {
        ageValidator:{
            required:{
                value:"true",
                message:"age is required"
            },
            min:{
                value:18,
                message:"min age is 18"
            },
            max:{
                value:60,
                message:"max age is 60"
            }
        },

        addValidator:{
            required:{
                value: true,
                message: "address is required"
            },
            minLength:{
                value:5,
                message:"min length is 5 character"
            },
            maxLength:{
                value:10,
                message:"max length is 10 character"
            }
        }
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>FormDemo2</h1>

        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>Name : </label>
                <input type="text" {...register("name",{required:{value:true, message:"name is required"}})}></input>
                {errors.name && errors.name.message}
            </div>

            <div>
                <label>Age : </label>
                <input type="text" {...register("age",validationSchema.ageValidator)}></input>
                {errors.age && errors.age.message}
            </div>

            <div>
                <label>Add : </label>
                <input type="text" {...register("add",validationSchema.addValidator)}></input>
                {errors.add?.message}
            </div>

            <div>
                <input type="submit" />
            </div>
        </form>
    </div>
  )
}
