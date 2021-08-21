import React, { useState} from 'react';
import "./signup.css";
import { motion } from "framer-motion";

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [errors, setErrors] = useState(false);
  
  const onSubmit = (e) => {
    e.preventDefault();

    const user = {
      username: username,
      password1: password1,
      password2: password2
    };

    fetch('http://127.0.0.1:8000/rest-auth/registration/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        if (data.key) {
          localStorage.clear();
          localStorage.setItem('token', data.key);
          
          window.location.replace('http://localhost:3000/');
        } else {
          setUsername('');
          setPassword1('');
          setPassword2('');
          localStorage.clear();
          setErrors(true);
        }
      });
  };

  return (
    <div>
      
      {errors === true && alert("Cannot Signup with this Credentials!!")}
      <motion.form initial={{ x: -1500 }}
        animate={{ x: 0 }}
        transition={{
          delay: 0.7,
          type: "spring",
          stiffness: 500,
        }} onSubmit={onSubmit} className="signup-form">
      <center><motion.h1 initial={{ x: 8500 }}
        animate={{ x: 0 }}
        transition={{
          delay: 0.9,
          type: "spring",
          stiffness: 500,
        }} style={{fontSize:'86px', color:'#F4B41A'}}>Sign Up</motion.h1></center>
      <div className="login-div">
        <motion.label initial={{ x: -1500 }}
        animate={{ x: 0 }}
        transition={{
          delay: 1.0,
          type: "spring",
          stiffness: 500,
        }} htmlFor='username' className="login-field">Username</motion.label> <br />
        <motion.input
        initial={{ x: 8500 }}
        animate={{ x: 0 }}
        transition={{
          delay: 1.2,
          type: "spring",
          stiffness: 500,
        }}
          name='username'
          className="login-input"
          type='text'
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />{' '}
        <br />
        <motion.label initial={{ x: -1500 }}
        animate={{ x: 0 }}
        transition={{
          delay: 1.4,
          type: "spring",
          stiffness: 500,
        }} htmlFor='password1' className="login-field">Password</motion.label> <br />
        <motion.input
        initial={{ x: -1500 }}
        animate={{ x: 0 }}
        transition={{
          delay: 1.6,
          type: "spring",
          stiffness: 500,
        }}
          name='password1'
          className="login-input"
          type='password'
          value={password1}
          onChange={e => setPassword1(e.target.value)}
          required
        />{' '}
        <br />
        <motion.label initial={{ x: 8500 }}
        animate={{ x: 0 }}
        transition={{
          delay: 1.7,
          type: "spring",
          stiffness: 500,
        }} htmlFor='password2' className="login-field">Confirm password</motion.label> <br />
        <motion.input
        initial={{ x: -1500 }}
        animate={{ x: 0 }}
        transition={{
          delay: 1.9,
          type: "spring",
          stiffness: 500,
        }}
          name='password2'
          className="login-input"
          type='password'
          value={password2}
          onChange={e => setPassword2(e.target.value)}
          required
        /></div>{' '}
        <br />
        <center><motion.button initial={{ x: 8500 }}
        animate={{ x: 0 }}
        transition={{
          delay: 2.0,
          type: "spring",
          stiffness: 500,
        }} type='submit' value='Signup' className="button-login">Sign Up</motion.button></center>
      </motion.form>
    </div>
  );
};

export default Signup;
