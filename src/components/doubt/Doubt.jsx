import "./doubt.css";
import Form from "./Form";
import React from "react";
import { motion } from "framer-motion";
class Doubt extends React.Component  {
    
    render(){ 
        return(
        <motion.div initial={{ x: -1500 }}
        animate={{ x: 0 }}
        transition={{
          delay: 0.5,
          type: "spring",
          stiffness: 500,
        }} className='doubt'>
            <motion.h1 initial={{ x: 8500 }}
        animate={{ x: 0 }}
        transition={{
          delay: 0.8,
          type: "spring",
          stiffness: 500,
        }} className="heading">
                Ask your doubts here
            </motion.h1>
            <Form requestType="post"></Form>
            </motion.div>
        
          );
        }
}
 

      
export default Doubt;
