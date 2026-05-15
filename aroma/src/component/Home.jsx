import React from 'react'
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    
    <div className='hero'>
        <center><h1>Welcome to Aroma Cafe</h1>
        <p>Experience the best coffee in town with us!</p>
        <button className='btn' onClick={() => navigate('/menu')}>Explore Menu</button>    
        </center> 
    </div>
  )
}

export default Home