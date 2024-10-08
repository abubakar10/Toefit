import { useEffect,useState } from "react";
import {useAuth} from "./../../Context/Auth.js"
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner/Spinner.js";

axios.defaults.baseURL = 'http://localhost:8080';
export default function AdminRoute(){
    const [ok,setOk]=useState(false)
    const [auth,setAuth]=useAuth()
    useEffect(()=>{
        const authCheck = async()=>{
            const res = await axios.get('/api/v1/auth/admin-auth')
            if(res.data.ok){
                setOk(true)
            }else{
                setOk(false)
            }
        }
        if(auth?.token) authCheck()
    },[auth?.token])
    return ok ? <Outlet/> : <Spinner path="" />;
}