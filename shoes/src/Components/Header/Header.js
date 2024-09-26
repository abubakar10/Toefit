import React from "react";
import "./Header.css";
import logo from "./../../Assets/logos/logo.png";
// import searchlogo from "./../../Assets/icons/search.png";
// import loginlogo from "./../../Assets/icons/user.png";
// import wishlistlogo from "./../../Assets/icons/heart.png";
import cartlogo from "./../../Assets/icons/shopping-cart.png";
import { Link } from 'react-router-dom';
import { useAuth } from "../../Context/Auth.js";
import toast from "react-hot-toast"
import { useCart } from "../../Context/CartProvider.js";
import { useState } from "react";
const Header = () => {
  const [auth,setAuth] =useAuth()
  const[cart] =useCart()
  const handleLogout =()=>{
    setAuth({
      ...auth,user:null,token:''
    });
    localStorage.removeItem('auth')
    toast.success('Logout Successfully')
  }
  return (
    <div className="header">
      <div className="logo">
        <a href="/">
          <img src={logo} alt="" />
        </a>
      </div>
      <div className="nav">
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="/ladies">
                    Ladies
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/men">
                    Men
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/kids">
                    Kids
                  </a>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link" href="/sale">
                    Sale
                  </a>
                </li> */}
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="others">
        <div className="navlogos">
        <div className="user-reg">
           {
            !auth.user ? (<><Link to ="/login">
             <button >Login</button>
          

           </Link></>) 
           :(<>
            <li  style={{ listStyleType: 'none' }} className="nav-item dropdown">
             <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              {auth?.user?.name}
             </Link>
             <ul style={{ listStyleType: 'none' }} className="dropdown-menu" >
            <li><Link to= {`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`} className="dropdown-item" >Dashboard</Link></li>
            <li><Link onClick={handleLogout} className="dropdown-item" to ="/login">
             Logout
           </Link>
           </li>
  </ul>
</li>
           </>)
           }
           </div>
           <div className="cart">
          <Link to= "/cart">
              <img src={cartlogo} alt="" />
          </Link>
          <div className="cart-count">{cart?.length}</div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Header;
