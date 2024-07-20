import React,{useState} from 'react'
import "./login.css"
import Layout from '../Layout/Layout.js'
import toast from 'react-hot-toast';
import axios from 'axios'
import {useNavigate} from "react-router-dom"
const Login = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const navigate= useNavigate()

  //form function
  const handleSubmit =async  (e) =>{
    e.preventDefault()
    try{
      const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`,{email,password})
      if(res && res.data.success){
        toast.success(res.data.message)
        navigate('/')

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
       <h1>Login</h1>
      <div className="mb-3">
        <input type="email" value={email} onChange={(e) =>setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your Email' required />
      </div>
      <div className="mb-3">
       <input type="password" value={password} onChange={(e) =>setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder='Enter your Password' required/>
      </div>
      <button type="submit" className="btn btn-primary bg-black">Login</button>
    </form>
    <h6>If You Dont have Account Click <span><a href="/signup">Signup</a></span></h6>
  </div>
  </div>
    </Layout>
    </>
  )
}

export default Login
