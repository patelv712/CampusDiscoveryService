import React from 'react';
import {useNavigate } from "react-router-dom"; 


const Welcome = () => {
    const navigate = useNavigate();
      
    return (
        <>
          <h1 style={{color:"black"}}>Welcome</h1>
          <button onClick={()=>navigate('./LoginForm')}>Start</button>
        </>
    )
  };
    
  export default Welcome;