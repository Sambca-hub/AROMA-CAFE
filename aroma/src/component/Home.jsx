import React from 'react'

const Home = () => {
  return (
    
    <div className='hero'>
        <center><h1>Welcome to Aroma Cafe</h1>
        <p>Experience the best coffee in town with us!</p>
        <button className='btn' onClick={() => window.location.href = '/menu'}>Explore Menu</button>    
        </center> 
    </div>
  )
}

export default Home