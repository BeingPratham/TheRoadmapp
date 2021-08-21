import React from "react";
import "./Content.css";
import { motion } from "framer-motion";
import { Button } from "@material-ui/core";
import { yellow } from "@material-ui/core/colors";
import {  withStyles } from '@material-ui/core/styles';

import Particlebackground from "../Particlebackground";
const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(yellow[500]),
      backgroundColor: yellow[500],
      '&:hover': {
        backgroundColor: yellow[700],
      },
    },
  }))(Button);
const Content = (props) => {
    return (  
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{
            delay:3
        }}
        className="content">
            {/* Heading */}
            <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{
                delay:4.5,
                type:"spring"
            }}
            className="head">
                <motion.hr
                initial={{x:-1500}}
                animate={{x:0}}
                transition={{
                    type:"spring",
                    delay:5
                }} className="top"></motion.hr>
                <motion.hr initial={{x:1500}}
                animate={{x:0}}
                transition={{
                    type:"spring",
                    delay:5
                }} className="right-top" />
                <motion.hr initial={{x:-1500}}
                animate={{x:0}}
                transition={{
                    type:"spring",
                    delay:5
                }} className="center"></motion.hr>
                <motion.hr initial={{x:1500}}
                animate={{x:0}}
                transition={{
                    type:"spring",
                    delay:5
                }} className="right-center" />
                <motion.hr
                initial={{x:1500}}
                animate={{x:0}}
                transition={{
                    type:"spring",
                    delay:5
                }} className="left-bottom" />
                <motion.hr initial={{x:1500}}
                animate={{x:0}}
                transition={{
                    delay:5
                }} className="right-bottom" />

               <motion.h1 
               initial={{opacity:0, scale:0}}
               animate={{opacity:1, scale:1}}
               transition={{
                   delay:4.7,
                   type:"spring",
                   stiffness:200
               }}
               className="intro">{props.intro}</motion.h1> 
            </motion.div>
            {/* Content */}
            
            <div className="page-content">
            <Particlebackground />
                <div className="content-actual">
               
                    <h3 className="definition"> A data structure is a particular way of organizing data in a computer so we can use  it effectively.</h3>
                    <center><h3 className="data">Why you need to learn DSA? </h3></center>
                    <h3 style={{marginTop:10, marginLeft:5, lineHeight:1.8}}>Many people consider Data Structures and Algorithms as just an unnecessary module in their computer science course. DSA is much more than that. It teaches you a way to be a better programmer and a way to think better. It is a skill that will help you throughout your career in some surprising ways.</h3>
                    <br/>
                    <h3 style={{marginTop:10, marginLeft:5, lineHeight:1.8}}>Data Structures and Algorithms are the fundamentals of Software Development. They remain the same no matter what new technology is used and that puts the focus on the problem rather than the technology in the interview process.</h3>
                    <center><h3 className="data">Steps to learn DSA?</h3></center>
                    <h3 style={{marginTop:10, marginLeft:5, lineHeight:1.8}}>Step 1: </h3>
                    <br></br>
                    <h3 style={{marginTop:10, marginLeft:5, lineHeight:1.8}}>Choose any of these programming language :- </h3>
                    {/* How to learn? */} 
                    <div className="pro-lan">
                    <a href="https://devdocs.io/c/" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/color/96/000000/c-programming.png"  alt="programming"/></a>
                    <a href="https://www.geeksforgeeks.org/c-plus-plus/?ref=shm" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/color/96/FFFF00/c-plus-plus-logo.png" alt="programming"/></a>
                    <a href="https://www.geeksforgeeks.org/java/?ref=shm" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/color/96/000000/java-coffee-cup-logo--v2.png" alt="programming"/></a>
                    <a href="https://www.geeksforgeeks.org/python-programming-language/?ref=shm" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/color/96/000000/python--v2.png" alt="programming"/></a>
                    <a href="https://www.w3schools.com/js/default.asp" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/color/96/000000/javascript--v2.png" alt="programming"/></a>
                    </div>
                    <h3 style={{marginTop:10, marginLeft:5, lineHeight:1.8}}>Step 2:</h3>
                    <h3 style={{marginTop:10, marginLeft:5, lineHeight:1.8}}>Register in any of these platform and solve as many problem as you can.</h3>
                    <div className="btn">
                    <a href="https://codeforces.com/" target="_blank"  rel="noreferrer"><ColorButton variant="contained" color="primary" className="cp" style={{fontSize:15,backgroundColor:"#fad05c", color:"white" }} >Codeforces</ColorButton></a>
                    <a href="https://www.hackerearth.com/" target="_blank" rel="noreferrer"><ColorButton variant="contained" color="green" className="cp" style={{fontSize:15,backgroundColor:"#2c3454", color:"white" }} >HackerEarth</ColorButton></a>
                    <a  href="https://leetcode.com/" target="_blank" rel="noreferrer"><ColorButton variant="contained" color="primary" className="cp" style={{fontSize:15, backgroundColor:"#2d2d2d", color:"white"}}>Leet Code</ColorButton></a>
                    <a href="https://www.topcoder.com/" target="_blank" rel="noreferrer"><ColorButton variant="contained" color="primary" className="cp" style={{fontSize:15,backgroundColor:"purple", color:"white"}} >Top Coder</ColorButton></a>
                    <a href="https://www.geeksforgeeks.org/" target="_blank" rel="noreferrer"><ColorButton variant="contained" color="primary" className="cp" style={{fontSize:15, backgroundColor:"lime", color:"white"}} >GeeksForGeeks</ColorButton></a>
                    <a href="https://www.codechef.com/" target="_blank"  rel="noreferrer"><ColorButton variant="contained" color="primary" className="cp" style={{fontSize:15, backgroundColor:"brown", color:"white"}} >Code Chef</ColorButton></a>
                    <a href="https://exercism.io/" target="_blank" rel="noreferrer"><ColorButton variant="contained" color="primary" className="cp" style={{fontSize:15, backgroundColor:"#009ca8", color:"white"}} >Exercism</ColorButton></a>
                    <a href="https://www.spoj.com/" target="_blank" rel="noreferrer"><ColorButton variant="contained" color="primary" className="cp" style={{fontSize:15, backgroundColor:"#3276af", color:"white"}} >SPOJ</ColorButton></a>
                    <a href="https://www.codewars.com/" target="_blank" rel="noreferrer"><ColorButton variant="contained" color="primary" className="cp" style={{fontSize:15, backgroundColor:"#ab341d", color:"white"}} >CodeWars</ColorButton></a>
                    </div>
                   
                    

                    <hr style={{marginTop:10}}></hr>
                    <center><h3 className="data">Demands</h3></center>
                    <h3 style={{marginLeft:20, marginTop:20}}>Data structure and algorithms are base of computer science. You can't clear your cs interview without Datastructure and algorithms. </h3>
                    <h3 style={{marginLeft:20, marginTop:20}}>Every big or small companies want a person who have better problem solving skill. </h3>
                    

                </div>
            {/* Image */}
            <div className="page-image">
                <img src='https://www.cdn.geeksforgeeks.org/wp-content/uploads/Competitive-Programming-1.jpg' alt="DSA" style={{height:285}} />
            </div>
            </div>
            {/* Demand */}
            {/* Companies and salary */}
        </motion.div>
    );
}
 
export default Content;