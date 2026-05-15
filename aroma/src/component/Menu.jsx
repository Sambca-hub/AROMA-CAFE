import React from 'react'

const menu = [
  {
    name: "Cappuccino",
    price: "120Rs",
    img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FwcHVjY2lub3xlbnwwfDJ8MHx8fDA%3D"
  },
  {
    name: "Croissant",
    price: "160Rs",
    img: "https://images.unsplash.com/photo-1765100213033-ce0f38b4f478?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNyb2lzc2FudHxlbnwwfDJ8MHx8fDA%3D"
  },
  {
    name: "Sandwich",
    price: "150Rs",
    img: "https://images.unsplash.com/photo-1603903631889-b5f3ba4d5b9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FuZHdpY2h8ZW58MHwyfDB8fHww"
  }
];

const Menu = () => {
  return (
    <div className='menu'>
      <h1 className="title1">Our Menu</h1>
   <p className="subtitle">
        Freshly brewed coffee and delicious bites made with love.
      </p>
<marquee className="marquee" behavior="scroll" direction="left" scrollamount="5">
  <span className="marquee-text">☕️ Try our signature Cappuccino! 🥐 Don't miss our flaky Croissants! 🥪 Savor our tasty Sandwiches! 🍰 Indulge in our delightful desserts! 🍩 Treat yourself to our sweet pastries! 🍪 Enjoy our fresh baked goods! 🍞 Start your day with our delicious breakfast options! 🌟 Experience the aroma of our freshly brewed coffee! ☕️ Visit us today and satisfy your cravings! 🏃‍♂️💨</span>
</marquee>
      <div className="menu-container">
        {menu.map((item, index) => {
          return (
            <div className="card" key={index}>
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
              <h4>{item.price}</h4>
              <button className="btn">Order Now</button>
            </div>
          );
        })}
      </div>
  </div>
  )
}

export default Menu