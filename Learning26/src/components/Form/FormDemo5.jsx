import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo5 = () => {

    const {register,handleSubmit,formState:{errors},watch} = useForm()

    const password = watch("password")
    console.log("watching...",password)
    console.log("errors..",errors)

    const submitHandler = (data) =>{
        alert("form is submitted...")
        console.log(data)
    }
    
    const validationSchema = {
        passwordValidator:{
            required:{
                value: true,
                message: "enter password"
            }
        },
        confirmpassValidator:{
            required:{
                value: true,
                message: "enter confirm password"
            },
            validate:(param)=>{
                return param == password || "password is not matched.."
            }
        }
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>FORM WATCH DEMO</h1>

        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <lable>Password:</lable>
                <input type="password" {...register("password",validationSchema.passwordValidator)}></input>
                {errors.password?.message}
            </div>
             <div>
                <lable>Confirm Password:</lable>
                <input type="password" {...register("confirmpassword",validationSchema.confirmpassValidator)}></input>
                {errors.confirmpassword?.message}
            </div>

            <div>
                <input type="submit" />
            </div>
        </form>
    </div>
  )
}
