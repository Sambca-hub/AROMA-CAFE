import React from 'react'

const menu = [
  {
    name: "Latte",
    price: "Rs 80",
    offer:"20% off",
    img: "https://images.unsplash.com/photo-1630021439100-74a32ab42d3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGF0dGV8ZW58MHwyfDB8fHww"
  },
  {
    name: "Burger",
    price: "Rs 150",
    offer:"10% off",
    img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8MnwwfHx8MA%3D%3D"
   },
  {
    name: "Cheese Cake",
    price: "Rs 350",
    offer:"15% off",
    img: "https://plus.unsplash.com/premium_photo-1666702222793-931694f635b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNoZWVzZWNha2V8ZW58MHwyfDB8fHww"
  }
];

const Discount = () => {
  return (
    <div className='discount'>
      <h1 className="title1">🔥Special Discounts</h1>
   <p className="subtitle">
        Enjoy exclusive discounts on our bestsellers. Limited time offer!
      </p>

      <div className="menu-container">
        {menu.map((item, index) => {
          return (
            <div className="card" key={index}>
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
                <h6>{item.offer}</h6>
              <h4>{item.price}</h4>
              <button className="btn">Grab Now</button>
            </div>
          );
        })}
      </div>
  </div>
  )
}

export default Discount