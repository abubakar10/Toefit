import React from "react";
import "./Header.css";
import logo from "./../../Assets/logos/logo.png";
// import searchlogo from "./../../Assets/icons/search.png";
// import loginlogo from "./../../Assets/icons/user.png";
// import wishlistlogo from "./../../Assets/icons/heart.png";
import cartlogo from "./../../Assets/icons/shopping-cart.png";
import { Link } from 'react-router-dom';

const Header = () => {
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
                <li className="nav-item">
                  <a className="nav-link" href="/sale">
                    Sale
                  </a>
                </li>
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
           <a href ="/login">
             <button >Login</button>
           </a>
          <Link to= "/cart">
              <img src={cartlogo} alt="" />
          </Link>
          <div className="cart-count">0</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
