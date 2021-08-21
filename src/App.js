import './App.css';
import React from 'react';
import Navbar from './components/nav/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Categories from './components/categories/Categories';
import Doubt from './components/doubt/Doubt';
import Footer from './components/footer/Footer';
import Login from './components/login/Login';
import { motion } from 'framer-motion';
import video from './components/home/bg/h-bg.mp4';
import Signup from './components/login/Signup';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Baserouter from './Baserouter';
import RightNav from './components/nav/RightNav';
import Logout from './components/login/Logout';
import Webdev from './components/categories/lists/Webdev';
import Ethical from './components/categories/lists/Ethical';
import Gamedev from './components/categories/lists/Gamedev';
import Mldev from './components/categories/lists/Mldev';
import Datascientist from './components/categories/lists/Datascientist';
import Animator from './components/categories/lists/Animator';
import Iosdev from './components/categories/lists/Iosdev';
import Appdev from './components/categories/lists/Appdev';



class App extends React.Component {
  
  render(){
  return (
    
    <div className="App">
    
        <motion.video
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{
                delay:1
            }}
   autoPlay
   muted
   
   style={{ height: "700px", width: "100%", objectFit: "cover" , zIndex:"-1", position:"absolute"}} //object-fit:cover
>
   <source src={video} type="video/mp4" />
</motion.video>
<Router>
      <Navbar>
        <RightNav></RightNav>
      </Navbar>
      
      
      
      <Switch>
        
        <Baserouter exact path="/">
          <Home />
        
          
        </Baserouter>

        <Route path="/about"><About/></Route>
        <Route path="/categories"><Categories/></Route>
        <Route path="/doubt"><Doubt/></Route>
        <Route path="/login"><Login></Login></Route>
        <Route path="/signup" component={Signup}></Route>
        <Route path="/logout" component={Logout}></Route>
        <Route path="/webdev"><Webdev></Webdev></Route>
        <Route path="/appdev"><Appdev></Appdev></Route>
        <Route path="/graphicdesigner"><Animator></Animator></Route>
        <Route path="/ethical"><Ethical></Ethical></Route>
        <Route path="/iosdev"><Iosdev></Iosdev></Route>
        <Route path="/mLdev"><Mldev></Mldev></Route>
        <Route path="/gamedev"><Gamedev></Gamedev></Route>
        <Route path="/datascientist"><Datascientist></Datascientist></Route>
        
      </Switch>
      <Footer />
      </Router>
    </div>
    
  );
}
}


export default (App);
