import React from 'react'
import {Link} from 'react-router-dom'
import "../styles/Navbar1.scss"

function Navbar1() {
  return (
    <div className="sum">
      <div className="logo">
        <h1>
          Sport<span>Age</span>
        </h1>
      </div>
      <nav className="item">
        <ul className="ul">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shoes">Shoes</Link>
          </li>
       
          <li>
            <Link to="/contact">Employers</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar1