import React from 'react'
import { EmployeeList } from './EmployeeList'

export const Employee = () => {
    var title = "EMPLOYEE APP"

    var company = {
        name:"TCS",
        year:2024
    }

    var employees = [
        {id:101, name:"dhruvil", age:22},
        {id:102, name:"dinesh", age:23},
        {id:103, name:"amit", age:21},
    ]
  return (
    <div style={{textAlign:"center"}}>
        <h1>Employee</h1>
        <EmployeeList title = {title} company = {company} employees = {employees}></EmployeeList>
    </div>
  )
}
