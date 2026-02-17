import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo4 = () => {
    
    const {register,handleSubmit,formState:{errors}} = useForm()
    console.log("errors...",errors)

    const submitHandler = (data) =>{
        alert("form submitted...")
        console.log(data);

    }

    const validationSchema = {
        nameValidatior:{
            required:{
                value:true,
                message: "name is required*"
            }
        },
        conatactValidator:{
            required:{
                value: true,
                message: "contact is required*"
            },
            pattern:{
               value: /[6-9]{1}[0-9]{9}$/,   //regex
                message:"contact is invald*"
            }
        },
        promocodeValidator:{
            required:{
                value: true,
                message: "promocode is required*"
            },
            validate:(param)=>{
                return param == "2026" || "invalid promocode"
            }
        },
        hobbiesValidator:{
            required:{
                value: true,
                message: "select any two"
            },
            validate:(param)=>{
                return param.length >= 2 || "select min 2"
            }
        }
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>FormDemo4</h1>

        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <lable>Name:</lable>
                <input type='text' {...register("name",validationSchema.nameValidatior)}></input>
                {errors.name?.message}
            </div>

            <div>
                <label>Contact:</label>
            <input type='text' {...register("contact",validationSchema.conatactValidator)}></input>
            {errors.contact?.message}
            </div>

            <div>
                <label>PromoCode:</label>
            <input type='text' {...register("promocode",validationSchema.promocodeValidator)}></input>     
            {errors.promocode?.message}   
            </div>

             <div>
                    <label>HOBBIES</label> <br></br>
                    Cricket:<input type='checkbox' {...register("hobbies",validationSchema.hobbiesValidator)} value="cricket"></input>
                    Travel:<input type='checkbox' {...register("hobbies",validationSchema.hobbiesValidator)} value="travel"></input>
                    Scrolling:<input type='checkbox' {...register("hobbies",validationSchema.hobbiesValidator)} value="scrolling"></input>
                
            </div>
            {errors.hobbies?.message}

            <div>
                <input type="submit" />
            </div>
        </form>
    </div>
  )
}
