import React, { Component } from 'react';
import './Navbar.css';
import { Link } from "react-router-dom"
class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="Navbar navbar navbar-expand-lg navbar-light float-right">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="NavList navbar-nav mr-auto">
              <li className="navItem nav-item"><Link className="navLink nav-link" to="/">Home</Link></li>
              <li className="navItem nav-item"><Link className="navLink nav-link" to="/products">Products</Link></li>
              <li className="navItem nav-item"><Link className="navLink nav-link" to="/order">Order</Link></li>
              <li className="navItem nav-item"><Link className="navLink nav-link" to="/about us">About Us</Link></li>
              <li className="navItem nav-item"><Link className="navLink nav-link" to="/contact">Contact</Link></li>
            </ul>

          </div>
        </div>
      </div>
    );
  }

}

export default Navbar;

