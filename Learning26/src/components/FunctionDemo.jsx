import React from 'react'
import { CardComponent } from './CardComponent';

export const FunctionDemo = () => {

    const test = ()=>{
        alert("this is alert meassage....");
    }

     const test2 = (x)=>{
        alert("value of x is"+x);
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>FunctionDemo</h1>
        <button onClick={test}>Click me</button>
        {/* <button onClick={test()}>Click me</button> */}
        <button 
            onClick={
                ()=>{
                    test2(100)
                }
            }
        >Click me</button>

        <CardComponent title="functiondemo1" desc="This is a simple Bootstrap card example."></CardComponent>
    </div>
  )
}
