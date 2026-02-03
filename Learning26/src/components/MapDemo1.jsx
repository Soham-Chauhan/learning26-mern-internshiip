import React from 'react'

export const MapDemo1 = () => {

    let cars = ["audi","bmw","volvo","tata","mahindra"];

  return (
    <div>MapDemo1
        {
            cars.map((car)=>{
                return <h2>{car}</h2>
            })
        }
    </div>
  )
}
