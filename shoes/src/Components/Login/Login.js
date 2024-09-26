import React,{useState} from 'react'
import "./login.css"
import Layout from '../Layout/Layout.js'
import toast from 'react-hot-toast';
import axios from 'axios'
import {useNavigate,useLocation} from "react-router-dom"
import { useAuth } from '../../Context/Auth.js';
const Login = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [auth,setAuth]=useAuth()
  const navigate= useNavigate()
  const location =useLocation()
  //form function
  const handleSubmit =async  (e) =>{
    e.preventDefault()
    try{
      const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`,{email,password})
      if(res && res.data.success){
        toast.success(res.data.message)
        setAuth({
          ...auth,
          user:res.data.user,
          token:res.data.token
        })
        localStorage.setItem('auth',JSON.stringify(res.data))
        navigate(location.state ||'/')

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
       <div className="container text-transform-none" >
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
      <div className="mb-3 ">
      <button type="button" className="btn btn-primary bg-black" onClick={()=>{navigate('/forgot-password')}}>Forgot Password</button>

      </div>
    </form>
    <h6>If You Dont have Account Click <span><a href="/signup">Signup</a></span></h6>
  </div>
  </div>
    </Layout>
    </>
  )
}

export default Login
