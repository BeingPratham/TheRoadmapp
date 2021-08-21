import React from "react";
import "./about.css";
import { motion } from "framer-motion";
const About = () => {
    return ( 
        <motion.div initial={{ x: -1500 }}
        animate={{ x: 0 }}
        transition={{
          delay: 1,
          type: "spring",
          stiffness: 500,
        }} className="about">
            <motion.div initial={{ x: 8500 }}
        animate={{ x: 0 }}
        transition={{
          delay: 1.5,
          type: "spring",
          stiffness: 500,
        }} className="heading-1">
                <motion.h1 initial={{ x: -1500 }}
        animate={{ x: 0 }}
        transition={{
          delay: 1.8,
          type: "spring",
          stiffness: 500,
        }} className="head-content">About US</motion.h1>
               
            </motion.div>
            <motion.div initial={{ x: 8500 }}
        animate={{ x: 0 }}
        transition={{
          delay: 1.9,
          type: "spring",
          stiffness: 500,
        }} className="heading-2">
                <motion.p initial={{ x: -1500 }}
        animate={{ x: 0 }}
        transition={{
          delay: 2.0,
          type: "spring",
          stiffness: 500,
        }} className="p-1">In these website, There is roadmaps of all computer science fields you want to learn and want to proceed your career in.
                Here you can find path to learn any technology or programming language for free. 
                If you want to learn something than you can follow our website and you don't need to pay for expensive courses.</motion.p>
            </motion.div>
            
        </motion.div>
     );
}
 
export default About;