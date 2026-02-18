import axios from 'axios'
import React, { useState } from 'react'

export const ApiDemo2 = () => {

    const [products, setproducts] = useState([])
    const [showTableHeader, setshowTableHeader] = useState(false)

    const getProducts = async() =>{
        const response = await axios.get("https://dummyjson.com/products")
        console.log(response.data.products)
        setproducts(response.data.products)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>API Demo 2</h1>
        <button className='btn btn-danger' onClick={getProducts} style={{width:"70px"}} onFocus={()=>{setshowTableHeader(true)}}>GET</button>
        
        <table className="table table-bordered table-sm" style={{marginTop:"20px"}}>
            {showTableHeader && (
                <thead>
                <tr>
                    <th>ID</th>
                    <th>CATAGORY</th>
                    <th>PRICE</th>
                    <th>DISCONTPER</th>
                    <th>RATING</th>
                    <th>STOCK</th>
                </tr>
            </thead>
            )}
            
            <tbody>
                {
                    products.map((product)=>{
                        return <tr>
                            <td>{product.id}</td>
                            <td>{product.category}</td>
                            <td>{product.price}</td>
                            <td>{product.discountPercentage}</td>
                            <td>{product.rating}</td>
                            <td>{product.stock}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
