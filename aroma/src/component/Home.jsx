import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    
    <div className='hero'>
        <center><h1>Welcome to Aroma Cafe</h1>
        <p>Experience the best coffee in town with us!</p>
        <Link><button className='btn'>Explore Menu</button></Link>    
        </center>
    </div>
  )
}

export default Home