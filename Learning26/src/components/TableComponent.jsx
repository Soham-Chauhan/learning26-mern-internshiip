import React from 'react'

export const TableComponent = () => {

     var students = [
        {id:101, name:"hiten", age:23},
        {id:102, name:"vaibhav", age:22},
        {id:103, name:"rajesh", age:21},
    ]
  return (
    <div style={{textAlign:"center"}}>
        <h1>TableComponent</h1>

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
                    students.map((student)=>{
                        return <tr>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
