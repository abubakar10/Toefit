import React,{useState} from 'react'
import "./Signup.css"
import Layout from '../Layout/Layout.js'
import toast from 'react-hot-toast';
import axios from 'axios'
import {useNavigate} from "react-router-dom"
const Signup = () => {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [phone,setPhone] = useState("")
  const [address,setAddress] = useState("")
  const [answer,setAnswer] = useState("")
  const navigate= useNavigate()

  //form function
  const handleSubmit =async  (e) =>{
    e.preventDefault()
    try{
      const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/Register`,{name,email,password,phone,address,answer})
      if(res && res.data.success){
        toast.success(res.data.message)
        navigate('/login')

      }else{
        toast.error(res.data.message);
      }

    }catch(error){
       console.log(error)
       toast.error('Something went wrong')
    }
  }

  return (
    <>
       <Layout title={"SignUp-ToeFit"}>
       <div className="container">
      <div className="form-container">
    <form onSubmit={handleSubmit}>
       <h1>Register Now</h1>
      <div className="mb-3">
        <input type="text" value={name} onChange={(e) =>setName(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your Name' required />
      </div>
      <div className="mb-3">
        <input type="email" value={email} onChange={(e) =>setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your Email' required />
      </div>
      <div className="mb-3">
       <input type="password" value={password} onChange={(e) =>setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder='Enter your Password' required/>
      </div>
      <div className="mb-3">
         <input type="text" value={phone} onChange={(e) =>setPhone(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your Phone' required />
      </div>
      <div className="mb-3">
       <input type="text" value={address} onChange={(e) =>setAddress(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your Address' required />
      </div>
      <div className="mb-3">
       <input type="text" value={answer} onChange={(e) =>setAnswer(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='What is your favourite sports' required />
      </div>
 
      <button type="submit" className="btn btn-primary bg-black">Register</button>
    </form>
  </div>
  </div>
    </Layout>
    </>
  )
}

export default Signup
