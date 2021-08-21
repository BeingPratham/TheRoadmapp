
import React from "react";
import Particles from 'react-particles-js';
import particlesconfig from "../config/particle-config";



export default function Particlebackground()  {
    return (  
        <Particles height={'1100px'} params={particlesconfig} style={{position:"absolute", zIndex:1}}></Particles>
    );
}
 

