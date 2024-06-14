import React ,{useState} from 'react'
import { useEffect } from 'react'
import "../css/login.css"
import {useParams,useNavigate} from 'react-router-dom'


export default function Update() {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [company, setCompany] = useState("")

    const params = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        getProductDetails();
    },[])

    const getProductDetails =async ()=>{
        console.warn(params);
        let result = await fetch(`${process.env.REACT_APP_BASE_API_URL}/product/${params.id}`,{
            headers:{
                Authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`
              }
        });
        result = await result.json();
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company);
    }

    const fetchDataForUpdate= async()=>{
        console.log(name,price,category,company);
        let result = await fetch(`${process.env.REACT_APP_BASE_API_URL}/product/${params.id}`,{
            method:"put",
            body:JSON.stringify({name,price,category,company}),
            headers:{
                'content-type':'application/json',
                'Authorization': `bearer ${JSON.parse(localStorage.getItem("token"))}`
                
            }
        });
        result = await result.json();
        console.warn(result)
        navigate("/")

    }


  return (
      <div className="ProductForm">
                <label htmlFor="name" style={{fontWeight:"bold",margin:"0px 0px 0px 3px"}}>Product Name:</label>
                <input style={{padding:"20px 4px",fontSize:"20px"}} type="text" placeholder='Enter product name' value={name} onChange={(e)=>setName(e.target.value)} />
                <label htmlFor="price" style={{fontWeight:"bold",margin:"0px 0px 0px 3px"}}>Price:</label>
                <input style={{padding:"20px 4px",fontSize:"20px"}} type="text" placeholder='Enter product price' value={price} onChange={(e)=>setPrice(e.target.value)} />
                <label htmlFor="category" style={{fontWeight:"bold",margin:"0px 0px 0px 3px"}}>Category:</label>
                <input style={{padding:"20px 4px",fontSize:"20px"}} type="text" placeholder='Enter product category' value={category} onChange={(e)=>setCategory(e.target.value)} />
                <label htmlFor="company" style={{fontWeight:"bold",margin:"0px 0px 0px 3px"}}>Company Name:</label>
                <input style={{padding:"20px 4px",fontSize:"20px"}} type="text" placeholder='Enter company name' value={company} onChange={(e)=>setCompany(e.target.value)} />
                <div className="d-grid gap-2 my-2">
                <button className="btn btn-primary" type="button" onClick={fetchDataForUpdate}>Update Product</button>
                </div>
    </div>
  )
}
