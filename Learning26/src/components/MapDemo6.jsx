import React from 'react'

export const MapDemo6 = () => {
        var students =[
        {id:1,name:"amit",age:23,marks:78,city:"ahmedabad",gender:"male"},
        {id:2,name:"prathna",age:25,marks:81,city:"ahmedabad",gender:"female"},
        {id:3,name:"rekha",age:22,marks:72,city:"ahmedabad",gender:"female"},
    ]

  return (
    <div style={{textAlign:"center"}}>
        <h1>MapDemo6</h1>
    <table className='table table-dark'>
        <thead>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>age</th>
                <th>marks</th>
                <th>city</th>
                <th>gender</th>
            </tr>
        </thead>

        <tbody>
                {
                    students.map((st)=>{
                    return <tr>
                        <td>{st.id}</td>
                        <td>{st.name}</td>
                        <td>{st.age}</td>
                        <td>{st.marks}</td>
                        <td>{st.city}</td>
                        <td>{st.gender}</td>
                    </tr>
                        
                    })
                }
        </tbody>
    </table>
    </div>
  )
}
