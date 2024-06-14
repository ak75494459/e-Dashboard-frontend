import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import "../css/login.css"

export default function ProductList() {

    const[products,setProducts] = useState([]);
    useEffect(()=>{
        getProducts();
    },[]);

    const getProducts=async()=>{
        let result = await fetch(`${process.env.REACT_APP_BASE_API_URL}/products`,{
          headers:{
            Authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`
          }
        })
        result = await result.json();
        setProducts(result);
    }
    
    const deleteProduct= async(id)=>{
      let result = await fetch(`${process.env.REACT_APP_BASE_API_URL}/product/${id}`,{
        method:"Delete",
        headers:{
          Authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`
        }
      });
      result = await result.json();
      if(result){
        setProducts((prevProducts) => prevProducts.filter((product) => product._id !== id));
      }
    }
    const searchHandle=async(e)=>{
      const key = e.target.value;
      if(key){
      let result = await fetch(`${process.env.REACT_APP_BASE_API_URL}/search/${key}`,{
      headers:{
        Authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`
      }
    })
      result = await result.json();
      if(result){
        setProducts(result);
      }
    }else{
      getProducts();
    }
    }
    
  return (
    <div>
    <div className="tableListProduct">
      <div className="search-bar">
      <input onChange={searchHandle} type="search" name="search" id="search-bar-productList" placeholder='Search Products'/>
      </div>
    <ul>
        <li>Serial No.</li>
        <li>Product Name</li>
        <li>Price</li>
        <li>Product Category</li>
        <li>Delete Product</li>
        <li>Update Product</li>
        <li>product quantity</li>
      </ul>
    </div>
        {products.map((item,index)=>
        <div className="tableListProduct" key={item._id}>
            <ul>
            <li>{index+1}</li>
            <li>{item.name}</li>
            <li>${item.price}</li>
            <li>{item.category}</li>
            <li onClick={()=>deleteProduct(item._id)} style={{cursor:"pointer"}}> <button>Delete</button></li>
            <li><Link to={"/updateproduct/"+item._id}>Update</Link></li>
            <li>{item.quantity}</li>
          </ul>
          </div>
        )}
    </div>
  )
}
