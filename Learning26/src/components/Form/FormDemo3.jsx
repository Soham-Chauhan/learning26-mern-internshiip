import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo3 = () => {

   const {register,handleSubmit,formState:{errors}} =  useForm()
   console.log("errors...",errors)

   const submitHandler = (data) =>{
    alert("form is submitted..")
    console.log(data)
   }

   const validationSchema = {
        nameValidator:{
            required:{
                value:true,
                message:"name is required..."
            }
        },

        ageValidator:{
            required:{
                value:true,
                message:"age is required..."
            },
            min:{
                value:5,
                message:"min value of age is 5"
            },
             max:{
                value:50,
                message:"max value of age is 50"
            }

        },

        cityValidator:{
            required:{
                value:true,
                message:"city name enter please..."
            },
            minLength:{
                value:3,
                message:"min character input is 3"
            },
            maxLength:{
                value:10,
                message:"max character input is 10"
            }

        },

        genderValidator:{
                required:{
                    value:true,
                    message:"please select any one option"
                }
        },

        hobbiesValidator:{
            required:{
                value:true,
                message:"please select any one option"
            }
        }
   }
  return (
    <div style={{textAlign:"center"}}>
        <h1>FormDemo3</h1>

        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>Name:</label>
                <input type="text" {...register("name",validationSchema.nameValidator)}></input>
                {errors.name?.message}
            </div>
            <div>
                <label>Age:</label>
                <input type="text" {...register("age",validationSchema.ageValidator)}></input>
                {errors.age?.message}
            </div>
             <div>
                <label>City:</label>
                <input type="text" {...register("city",validationSchema.cityValidator)}></input>
                {errors.city?.message}
            </div>
             <div>
                <label>Gender:</label>
                Male: <input type="radio" name="gneder" value="male"{...register("Gender",validationSchema.genderValidator)}></input>&nbsp;
                {errors.gender?.message}
                Female: <input type="radio" name="gneder" value="female"{...register("Gender",validationSchema.genderValidator)}></input>&nbsp;
                {errors.gender?.message}
                Other: <input type="radio" name="gneder" value="other"{...register("Gender",validationSchema.genderValidator)}></input>&nbsp;
                {errors.gender?.message}
            </div>
            <div>
                <label>Hobbies</label> <br></br>
                Cricket<input type="checkbox" value="cricket " {...register("hobbies",validationSchema.hobbiesValidator)}></input>&nbsp;
            
                 Travelling<input type="checkbox" value="travelling " {...register("hobbies",validationSchema.hobbiesValidator)}></input>&nbsp;
                 
                  Watch Movie<input type="checkbox" value="watch movie" {...register("hobbies",validationSchema.hobbiesValidator)}></input>&nbsp; <br></br><br></br>
                  {errors.hobbies?.message}

            </div>
            <div>
                <input type="submit" />
            </div>
        </form>
    </div>
  )
}
