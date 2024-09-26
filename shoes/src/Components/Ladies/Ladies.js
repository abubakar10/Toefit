// import React from 'react'
// import LadiesSection1 from "./LadiesSection1/LadiesSection1.js"
// import Layout from '../Layout/Layout.js';


// const Ladies = () => {
//   return (
//     <>
//       <Layout title={"Ladies-Toefit"}>
//          <LadiesSection1/>
//       </Layout>
       
      
//     </>
    
//   )
// }

// export default Ladies;
import React, { useState, useEffect } from "react";
import Layout from "./../Layout/Layout.js";
import { useCart } from "../../Context/CartProvider.js";
import axios from "axios";
import { Checkbox, Radio } from "antd";
import toast from "react-hot-toast"
import "./Ladies.css"

const Ladies = () => {
  const [products, setProducts] = useState([]);
  const [cart,setCart] =useCart()
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  
  const getAllProducts = async () => {
    try {
     
      const { data } = await axios.get('/api/v1/product/get-product');
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };

 
  useEffect(()=>{
    getAllProducts();
  },[])
  return (
    <Layout title={"ALl Products - Best offers "}>
      <div className="container-fluid row mt-3">
        <div className="col-md-2">
       
          
        </div>
        <div className="col-md-12 ">
          <h1 className="text-center">All Products</h1>
          <div className="d-flex flex-wrap products">
            {products?.map((p) => (
              <div className="card m-2" style={{ width: "18rem" }}>
                <img
                  src={`http://localhost:8080/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">
                    {p.description.substring(0, 30)}...
                  </p>
                  <p className="card-text"> $ {p.price}</p>
                  <button class="btn btn-primary ms-1">More Details</button>
                  <button class="btn btn-secondary ms-1" onClick={()=>{
                    setCart([...cart,p])
                    localStorage.setItem('cart',JSON.stringify([...cart,p]))
                    toast.success('Item Added to cart')
                    }} >
                    ADD TO CART</button>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </Layout>
  );
};

export default Ladies;
