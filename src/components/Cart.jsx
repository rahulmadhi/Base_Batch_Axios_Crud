import React, { useEffect, useState } from 'react'
import axiosInstance from '../helpers/axiosInstance'
import { Link } from 'react-router-dom'

const Cart = () => {

  let [productData , setProductData] = useState([]) 

  useEffect(()=>{

      let fetchData =async()=>{
          let {data}= await axiosInstance.get("/posts")
          setProductData(data)
      }
      fetchData()
  },[])


  let handleDelete = (id)=>{
  axiosInstance.delete(`/posts/${id}`)
  window.location.assign("/cart")

  }


  return (
    <div className='main-container'>
        {
          productData.map((x)=>{
              return(
                <div className='box-items'>
                    <img className='person' src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${x.pname}`} alt="" />
                      <h2>Product Name : <span>{x.pname}</span></h2>
                      <h2>Product Pride : <span>{x.pprice}</span></h2>
                      <h2>Product Qty : <span>{x.pqty}</span></h2>
                        <div className='btn-block'>
                            <button>  
                                <Link to={`/update/${x.id}`}>Update</Link>
                            </button>
                            <button onClick={()=>{
                              handleDelete(x.id)
                            }}>Delete</button>
                        </div>
                </div>
              )
          })
        }
    
    </div>
  )
}

export default Cart