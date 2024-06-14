import React, { useState } from 'react'
import '../css/login.css'
export default function Product() {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [company, setCompany] = useState("")
    const [quantity,setQuantity]= useState("")
    const [error, setError] = useState(false)

    const fetchData =async () => {
        console.log(!name)
        if(!name || !price || !category || !company || !quantity){
            setError(true)
            return false;
        }
         
        console.log({ name, price, category, company, quantity })
        const userId = JSON.parse(localStorage.getItem("user"))._id
        try{
        let result = await fetch(`${process.env.REACT_APP_BASE_API_URL}/product-add`,{
            method:"post",
            body:JSON.stringify({name, price, category, userId, company,quantity}),
            headers:{
                'content-type':'application/json',
                'Authorization': `bearer ${JSON.parse(localStorage.getItem("token"))}`
            }
            
        })
        result =await result.json();
        console.warn(result);
        setName("")
        setPrice("")
        setCategory("")
        setCompany("")
        setQuantity("")
        alert("product is added")
    }catch(e){
        console.error("error:",e)
    }
    }
    
    return (
        <div>
            <div className="ProductForm">
                <label htmlFor="name" style={{fontWeight:"bold",margin:"0px 0px 0px 3px"}}>Product Name:</label>
                <input style={{padding:"20px 4px",fontSize:"20px"}} type="text" placeholder='Enter product name' value={name} onChange={(e) => { setName(e.target.value) }} />
                {error && !name && <span className='inputError'>please Enter valid input</span>}
                <label htmlFor="price" style={{fontWeight:"bold",margin:"0px 0px 0px 3px"}}>Price:</label>
                <input style={{padding:"20px 4px",fontSize:"20px"}} type="text" placeholder='Enter product price' value={price} onChange={(e) => { setPrice(e.target.value) }} />
                {error && !price && <span className='inputError'>please Enter valid input</span>}
                <label htmlFor="category" style={{fontWeight:"bold",margin:"0px 0px 0px 3px"}}>Category:</label>
                <input style={{padding:"20px 4px",fontSize:"20px"}} type="text" placeholder='Enter product category' value={category} onChange={(e) => { setCategory(e.target.value) }} />
                {error && !category && <span className='inputError'>please Enter valid input</span>}
                <label htmlFor="company" style={{fontWeight:"bold",margin:"0px 0px 0px 3px"}}>Company Name:</label>
                <input style={{padding:"20px 4px",fontSize:"20px"}} type="text" placeholder='Enter company name' value={company} onChange={(e) => { setCompany(e.target.value) }} />
                {error && !company && <span className='inputError'>please Enter valid input</span>}
                <label htmlFor="company" style={{fontWeight:"bold",margin:"0px 0px 0px 3px"}}>Quantity:</label>
                <input style={{padding:"20px 4px",fontSize:"20px"}} type="text" placeholder='Enter Quantity of Products' value={quantity} onChange={(e) => { setQuantity(e.target.value) }} />
                {error && !quantity && <span className='inputError'>please Enter valid input</span>}
                <div className="d-grid gap-2 my-2">
                <button className="btn btn-primary" type="button" onClick={fetchData}>Add Items</button>
                </div>
        </div>
        </div>
        
    )
}
