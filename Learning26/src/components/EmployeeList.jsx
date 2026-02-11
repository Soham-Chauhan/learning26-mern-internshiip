import React from 'react'
import { SubEmployeeList } from './SubEmployeeList';

export const EmployeeList = (props) => {
    console.log("employee list ",props)
  return (
    <div style={{textAlign:"center"}}>
        <h1>EmployeeList</h1>
        <li>{props.title}</li>
        <li>{props.company.name}</li>
        <li>{props.company.year}</li>

        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.employees.map((emp)=>{
                        return <tr>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.age}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>

        <SubEmployeeList title = {props.title} company = {props.company} employees = {props.employees}></SubEmployeeList>
    </div>
  )
}
