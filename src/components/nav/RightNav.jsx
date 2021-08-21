import React, { useState, useEffect, Fragment} from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import './rightnav.css'
import {Link} from 'react-router-dom';
import { Button } from '@material-ui/core';
import { withRouter } from 'react-router';



const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  margin-top:5px;
  
  
  li {
    padding: 18px 10px;
    font-family: "Lucida Console", "Courier New", monospace;
    color:white;
    font-size:20px;
    word-spacing:2px;
    cursor:pointer;
  }
  a{
    color:white;
    font-size:20px;
    cursor:pointer;
    text-decoration:none;
    font-weight:bolder;
  }
  button{
    color:white;
    border:1px solid white;
    margin-top:8px;
    border-radius:999px;
   width:128px;
   font-weight:bolder;
  }
  button:hover{
    color:#143D59;
    background-color:yellow;
    transition:0.3s ease;
  }
 a:active{
   color:#143D59;
 }
  
  li:hover{
    
   color:#143D59;
    opacity:1;
    
    transition: 0.6s ease;
  }
  
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: transparent;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    z-index: 999;
    right: 0;
    // height:50;
    width: 100%;
    padding-top: 3.5rem;
    transition: transform 0.4s ease-in-out;
    li {
        font-family: "Lucida Console", "Courier New", monospace;
        text-shadow: none;
        color:white;
        // background-color:#00FFFF;
        border-bottom: 1px solid white;   
    }
    li:hover{
      color:#143D59;
      background-color:white;
      transition: transform 0.2s ease-in-out;
    }
    a{
      text-decoration:none;
      color:#F4B41A;
      background-color:#143D59;
      cursor:pointer;
      font-weight: bolder;
    }
    a:hover{
      background-color:#F4B41A;
      color:#143D59;
      
    }
    button{
      // margin-left:110px;
      margin-top:30px;
      top:-15px;
      width:100%;
      background-color: yellow;
      color:#143D59;
      font-size:16px;
    }
    .login{
      background-color:transparent;
    }
  }
`;


const RightNav = (props) => {

  const [isAuth, setIsAuth] = useState(false);
  const [login, setLogin] = useState('login');

  

  useEffect(() => {
    let token = localStorage.getItem('token');
    if (token !== null) {
      setIsAuth(true);
      console.log('hello');
    }
    else{
      setIsAuth(false);
    }
  }, []);
  
  return (
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{
      delay:1.3
    }}
    className="nav-h">
    <Ul open={props.open} >
       
        <Link  to="/" onClick={props.close}><li > Home</li></Link>
        <Link to="/categories" onClick={props.close}> <li > Categories</li></Link>
        <Link to="/doubt" onClick={props.close}> <li >Doubt</li></Link>
        <Link to="/about" onClick={props.close}><li > AboutUs</li></Link>     
        {
          login&&!isAuth?
          <Fragment>
            {' '}
          <Link className="login" to="/login"> <Button>Log In</Button> </Link>
          </Fragment>
          :
          <Fragment>
            {' '}
          <Link className="login" to="/logout" > <Button>Logout</Button> </Link>
          </Fragment>

        }
             
        

    </Ul>
    </motion.div>
    
    
  )
}




export default withRouter(RightNav);