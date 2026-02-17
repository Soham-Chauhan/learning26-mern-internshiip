import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const PassowordValidation = () => {

    const {register,handleSubmit,watch,formState:{errors}} = useForm();
    const [showRules,setshowRules]= useState(false);

 console.log("errors...",errors)

    const password = watch("password", "")

   const hasUpperCase = /[A-Z]/.test(password)
  const hasLowerCase = /[a-z]/.test(password)
  const hasNumber = /[0-9]/.test(password)
  const hasSpecialChar = /[!@#$%^&*]/.test(password)
  const hasLength = password.length >= 8

  const isValidPassword =
    hasUpperCase &&
    hasLowerCase &&
    hasNumber &&
    hasSpecialChar &&
    hasLength;

    const submitHandler = (data) =>{
        if(!isValidPassword){
            alert("Password does not match all requirenments")
            return;
        }

        alert("form is submitted..");
        console.log(data);
    }

    const validationSchema = {
        passwordValidator:{
            requird:{
                value:true,
                message:"Please Enter Password"
            }
        }
    };

  return (
    <div style={{textAlign:"center"}}>
        <h1>PassowordValidation</h1>

        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                 <label>Passoword:</label>
            <input type="password" placeholder='Enter Password' {...register("password", validationSchema.passwordValidator)} onFocus={()=> setshowRules(true)} />
            </div>
            <div>
                {errors.password?.message}
            </div>
           
           {showRules && (
            <div style={{ marginTop: "10px" }}>
                 <p className={hasUpperCase ? "text-warning" : "text-secondary"}>
              • At least 1 Uppercase letter
            </p>

            <p className={hasLowerCase ? "text-warning" : "text-secondary"}>
              • At least 1 Lowercase letter
            </p>

            <p className={hasNumber ? "text-warning" : "text-secondary"}>
              • At least 1 Number
            </p>

            <p className={hasSpecialChar ? "text-warning" : "text-secondary"}>
              • At least 1 Special Character
            </p>

            <p className={hasLength ? "text-warning" : "text-secondary"}>
              • Minimum 8 Characters
            </p>
            </div>
           )}

           <div>
            <input type="submit" />
           </div>
        </form>
    </div>
  )
}

