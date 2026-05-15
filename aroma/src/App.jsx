import { Routes, Route, Link } from "react-router-dom";

import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Menu from "./component/Menu"; 
import "./App.css";
import Reserve from "./component/Reserve";
import Discount from "./component/Discount";
function App() {
  return (
    <>
      <nav>
        <div className="logo">
          🥐Aroma
        </div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/discount">Discount</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <Link to="/reserve"><button className="btn">Reserve Now</button></Link>
      
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/discount" element={<Discount />} />
        <Route path="/reserve" element={<Reserve />} />
      </Routes>
    </>
  );
}

export default App;
