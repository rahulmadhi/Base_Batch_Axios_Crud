import React, { useState } from 'react'
import axiosInstance from '../helpers/axiosInstance'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useEffect } from 'react'


const Update = () => {

  let {id} = useParams() ; 
  let navigate = useNavigate()

  let [pname , setPname] = useState("")
  let [pprice , setPprice] = useState("")
  let [pqty ,setPqty] = useState('')

    useEffect(()=>{
        let fetchData = async()=>{
                let {data} = await axiosInstance.get(`/posts/${id}`)
               setPname(data.pname)
               setPprice(data.pprice)
               setPqty(data.pqty)
        }
        fetchData()
    },[])



  let handleSubmit = (e)=>{
    e.preventDefault()
    let payload = {
      pname, 
      pprice ,
      pqty
    }
      axiosInstance.put(`/posts/${id}` , payload)
    window.location.assign("/cart")
      toast.success(`${payload.pname} updated successfully!`)
  }


  return (
    <div style={{"textAlign": "center"}}>
       <br /> <br /> <br />
      <form action="">
        <fieldset>
          <legend>UPDATE A PRODUCT</legend>
          <br /> <br />
            <label htmlFor="pname">Product Name : </label>
            <input placeholder='product name' type="text" id="pname" onChange={(e)=>{
                    setPname(e.target.value)
            }} value={pname} /> <br /> <br />
            <label htmlFor="pprice">Product Price : </label>
            <input placeholder='product price' type="text" id="pprice"onChange={(e)=>{
                    setPprice(e.target.value)
            }} value={pprice} /> <br /> <br />
            <label htmlFor="pqty">Product QTY : </label>
            <input placeholder="product qty "  type="number" id='pqty' onChange={(e)=>{
                    setPqty(e.target.value)
            }} value={pqty} />  <br /> <br />
            <button className='btn' onClick={handleSubmit}>UPDATE PRODUCT</button>
        </fieldset>
      </form>
    </div>
  )
}

export default Update