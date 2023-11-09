import React, { useState } from 'react'
import axiosInstance from '../helpers/axiosInstance'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Product = () => {

  let navigate = useNavigate()

  let [pname , setPname] = useState("")
  let [pprice , setPprice] = useState("")
  let [pqty ,setPqty] = useState('')

  let handleSubmit = (e)=>{
    e.preventDefault()
    let payload = {
      pname, 
      pprice ,
      pqty
    }
      axiosInstance.post("/posts" , payload)
      navigate("/cart")
      toast.success(`${payload.pname} added successfully!`)
  }


  return (
    <div style={{"textAlign": "center"}}>
       <br /> <br /> <br />
      <form action="">
        <fieldset>
          <legend>ADD A PRODUCT</legend>
          <br /> <br />
            <label htmlFor="pname">Product Name : </label>
            <input placeholder='product name' type="text" id="pname" onChange={(e)=>{
                    setPname(e.target.value)
            }} /> <br /> <br />
            <label htmlFor="pprice">Product Price : </label>
            <input placeholder='product price' type="text" id="pprice"onChange={(e)=>{
                    setPprice(e.target.value)
            }} /> <br /> <br />
            <label htmlFor="pqty">Product QTY : </label>
            <input placeholder="product qty "  type="number" id='pqty' onChange={(e)=>{
                    setPqty(e.target.value)
            }} /> <br /> <br />
            <button className='btn' onClick={handleSubmit}>ADD PRODUCT</button>
        </fieldset>
      </form>
    </div>
  )
}

export default Product