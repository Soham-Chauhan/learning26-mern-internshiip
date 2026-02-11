import React, {useState} from 'react'
import { CardComponent } from './CardComponent'

export const UseStateDemo1 = () => {

    // var count = 0; 
    const [count,setCount] = useState(0)    //count=0
    // count --> stateVariable
    // setCount --> setter Function --> it will use for upadate state variable.
    // useState(0) --> 0 will act as intial value

    const increseCount = ()=>{
        // console.log("count before increse",count)
        // count++;
        console.log("count after increse",count)
        setCount(count+1)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>UseStateDemo1</h1>
        <h1>Count = {count}</h1>
        <button onClick={increseCount}> + </button>

        <CardComponent title="useStatedemo1" desc="this is usestatedemo1 component"></CardComponent>
    </div>
  )
}
