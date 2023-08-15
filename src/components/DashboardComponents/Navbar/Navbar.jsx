import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'; 
import { signOutUser } from '../../../redux/actionCreators/authActionCreator';
import logo2 from "../../../assets/logo2.png"


const Navbar = () => {

  const {isAuthenticated, user} = useSelector(state => state.auth);
  const dispatch = useDispatch();

  return (
    <nav className="navbar navbar-expand-lg navbar-white bg-white shadow-lg px-3">
      <Link className='navbar-brand ms-5 d-flex' to="/dashboard" > 
        <img style={{ maxWidth: '30%' }} src={logo2} alt="logo2"/>         
      </Link> 
    
      <ul className="navbar-nav ms-auto me-5">
        { isAuthenticated ? (
            <>
              <li className="nav-item mx-2">
                <p className='my-0 mt-1 mx-2'>
                  <span className="text-dark"> Welcome, </span>
                  <span className="fw-bold">{user.displayName} </span>                  
                </p>
              </li>
              
              <li className="nav-item mx-2">
                <Link to="/" className=" btn btn-primary  "> 
                  Home 
                </Link>
              </li>
              <li className="nav-item">
                <button className=" btn btn-success " onClick={()=> dispatch(signOutUser())} > 
                  Logout 
                </button> 
              </li>
            </>
          ) :  (
            <>
                <li className="nav-item mx-2">
                  <Link to="/login" className=" btn btn-primary btn-sm "> Login </Link>
                </li>
                <li className="nav-item">
                  <Link to="/register" className=" btn btn-success btn-sm "> Register </Link> 
                </li>
            </>
          )
        }
       
      </ul>
    </nav>

      
    
  )
}

export default Navbar;
