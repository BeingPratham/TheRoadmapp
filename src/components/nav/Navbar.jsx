import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import { motion } from 'framer-motion';
import logo from '../logos/logo1.png'
import "./navbar.css";
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  width: 100%;
  height: 60px;
  // border-bottom: 2px solid #143D59;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
  }
`

class Navbar extends React.Component {
 
  render(){
  return (
    <Nav>
      <motion.div 
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{
        delay:1.3
      }}
      className="logo">
        <Link to="/"><img src={logo} className="logo_main" alt="logo"></img></Link>
        
      </motion.div>
      
      <Burger />
    </Nav>
  )
}
}

export default Navbar