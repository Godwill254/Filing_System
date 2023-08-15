import React from 'react';
import  NavigationComponent  from '../../components/HomePageComponents/Navigation';
import logo from "../../assets/logo.png";

const HomePage = () => {
  return (
    <>
      <NavigationComponent/>
      <div className='container text-center mt-5'>
        <img src={logo} alt="logo" className='display-flex' />
      </div>
      
      <h1 className='display-1 my-5 text-center' > Welcome to JFMS </h1> 
      <p className="text-center text-lg" >Choose How You Would Like to Proceed on the Top Right Corner</p>
    </>
  )
}

export default HomePage;  
