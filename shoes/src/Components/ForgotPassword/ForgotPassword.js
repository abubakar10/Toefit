import React,{useState} from 'react'
import Layout from '../Layout/Layout.js'
import "./../Login/login.css"
import toast from 'react-hot-toast';
import axios from 'axios'
import {useNavigate} from "react-router-dom"
axios.defaults.baseURL = 'http://localhost:8080';
const ForgotPassword = () => {
    const [email,setEmail] = useState("")
    const [newPassword,setNewPassword] = useState("")
    const [answer,setAnswer] = useState("")
    const navigate= useNavigate()
    
    //form function
    const handleSubmit =async  (e) =>{
      e.preventDefault()
      try{
        const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/forgot-password`,{email,newPassword,answer})
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
    <Layout title={'Forgot Password - Ecommerce APP'}>
       <div className="container">
      <div className="form-container">
    <form onSubmit={handleSubmit}>
       <h1>Reset Password</h1>
      <div className="mb-3">
        <input type="email" value={email} onChange={(e) =>setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your Email' required />
      </div>
      <div className="mb-3">
        <input type="text" value={answer} onChange={(e) =>setAnswer(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your favourite sport name' required />
      </div>
      <div className="mb-3">
       <input type="password" value={newPassword} onChange={(e) =>setNewPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder='Enter your New Password' required/>
      </div>
      <button type="submit" className="btn btn-primary bg-black">Reset</button>
      

      
    </form>
    <h6>If You Dont have Account Click <span><a href="/signup">Signup</a></span></h6>
  </div>
  </div>
    </Layout>
  )
}

export default ForgotPassword
