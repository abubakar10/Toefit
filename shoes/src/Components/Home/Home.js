import React from 'react'
import Section1 from './Section1/Section1.js'
import Section2 from './Section2/Section2.js'
import Layout from '../Layout/Layout.js'




const Home = () => {
  
  return (
    <>
         <Layout title={"Home-Toefit"}>
           <Section1/>
           <Section2/>
          </Layout>
        
          
        
    </>
  )
}

export default Home;
