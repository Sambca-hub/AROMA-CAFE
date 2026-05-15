import React from 'react'

export const About = () => {
  return (
    <div className="about">
  <h1 className="title">Our Story</h1>
  <p className="subtitle">
    Welcome to Aroma Cafe, where passion for coffee meets a cozy atmosphere.</p>

<div className="about-container">
  <img
    className="about-img"
    src="https://images.unsplash.com/photo-1612346903007-b5ac8bb135bb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt="Coffee Shop"
  />

  <div className="about-content">
    <h2 className="title">
     Before the Coffee Gets Cold
    </h2>

    <br />

    <p>
      We provide freshly brewed coffee, crispy croissants,
      and delicious sandwiches made with quality ingredients.
    </p>

    <br />

    <p>
      Our café is designed to give you a warm and relaxing
      atmosphere where you can enjoy time with friends and family.
    </p>
    </div>
  </div>
</div>
  )
}

export default About    