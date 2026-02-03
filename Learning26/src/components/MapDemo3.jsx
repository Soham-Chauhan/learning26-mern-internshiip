import React from 'react'

export const MapDemo3 = () => {

     var students =[
        {id:1,name:"amit",age:23,marks:78,city:"ahmedabad",gender:"male"},
        {id:2,name:"prathna",age:25,marks:81,city:"ahmedabad",gender:"female"},
        {id:3,name:"rekha",age:22,marks:72,city:"ahmedabad",gender:"female"},
    ]

  return (
    <div style={{textAlign:"center"}}>
        <h1>MapDemo3</h1>

        <table border="2" align="center">
        <thead>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>AGE</th>
                <th>MARKS</th>
                <th>CITY</th>
                <th>GENDER</th>
            </tr>
        </thead>
        <tbody>
            {
                students.map((stud)=>{
                    return <tr>
                        <td>{stud.id}</td>
                        <td>{stud.name}</td>
                        <td>{stud.age}</td>
                        <td>{stud.marks}</td>
                        <td>{stud.city}</td>
                        <td>{stud.gender}</td>
                    </tr>
                })
            }
        </tbody>
    </table>        
    </div>
  )
}
