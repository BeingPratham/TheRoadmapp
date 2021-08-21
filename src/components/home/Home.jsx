import React from "react";
import { motion } from "framer-motion";
import Content from "./Content";

import "./home.css";
const Home = () => {
  return (
    <div className="landing">
      <motion.div className="welcome">
        <motion.h1
          className="wel"
          initial={{ x: -1500 }}
          animate={{ x: 0 }}
          transition={{
            delay: 1.4,
            type: "spring",
            stiffness: 500,
          }}
        >
          Wel
        </motion.h1>
        <motion.h1
          className="come"
          initial={{ x: 1500 }}
          animate={{ x: 0 }}
          transition={{
            delay: 1.4,
            type: "spring",
            stiffness: 500,
          }}
        >
          come
        </motion.h1>
      </motion.div>
      <div className="h-content">
        <motion.h3
          className="h-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            delay: 1.8,
          }}
        >
          Here you can find path to learn anything free.
        </motion.h3>
      </div>
      <div className="wrapper">
        <motion.h2
        initial={{opacity:0, scale:0}}
        animate={{opacity:1, scale:1}}
        transition={{
          delay: 2,
          type:'spring'
          
        }}
        >Learn <span className="spanner"></span></motion.h2>
      </div>
      <div className="quote">
          <motion.p
          initial={{opacity:0, scale:0}}
          animate={{
            opacity:1,
            scale:1
          }}
          transition={{
            delay:5.4,
            type:"spring",
            stiffness: 500,
          }}
          >Everyone can code!!</motion.p>
      </div>
      
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{
        delay:3
    }}
    className="home-content">
    <hr></hr>
      <Content intro="Datastructure and algorithms"/>
    </motion.div>
    </div>
    
  
  );
};

export default Home;
