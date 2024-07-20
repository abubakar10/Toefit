import React from "react";
import "./App.css";
import Header from "./Components/Header/Header.js";
// import Section1 from "./Components/Section1/Section1";
// import Section2 from "./Components/Section2/Section2";
// import Section3 from "./Components/Section3/Section3";
// import Section4 from "./Components/Section4/Section4";
import Footer from "./Components/Footer/Footer.js";
import Home from "./Components/Home/Home.js";
import Ladies from "./Components/Ladies/Ladies.js";
import Men from "./Components/Men/Men.js";
import Login from "./Components/Login/Login.js"
import Signup from "./Components/Signup/Signup.js";

import {  Route, Routes } from "react-router-dom"
import Cart from "./Components/Cart/Cart.js";
import Sale from "./Components/Sale/Sale.js";
import Kids from "./Components/Kids/Kids.js";
import About from "./Components/About/About.js";
import PageNotFound from "./Components/PageNotFound/PageNotFound.js";
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
           
          <Header />
          <Routes>
              <Route path='/' Component={Home} />
              <Route path='/ladies' Component={Ladies} />
              <Route path='/men' Component={Men} />
              <Route path='/sale' Component={Sale} />
              <Route path='/kids' Component={Kids} />
              <Route path='/login' Component={Login} />
              <Route path='/signup' Component={Signup} />
              <Route path='/cart' Component={Cart} />
              <Route path='/about' Component={About} />
              <Route path='*' Component={PageNotFound} />
          </Routes>
       

        <Footer />
      
    </>
  );
}

export default App;
