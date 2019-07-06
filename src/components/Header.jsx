import React, { Component } from 'react';
import './Header.css';
import { Link } from "react-router-dom"
import Logo from "../Image/Logo JS.png"
import Navbar from './Navabr';
import TopMenu from './TopMenu';
class Header extends Component {
  render() {
    return (
      <div>
        {/* Header Line */}
        <div className="headerLine"></div>

        {/* Logo */}
        <div className="logo float-left">
          <Link to="/"><img className="logoImage" src={Logo} alt="" /></Link>
        </div>
        <div className="companyName">
          <h1><Link className="name float-left" to="/">JS Enterprise</Link></h1>
        </div>
        {/* Top Menu */}
        {/* <TopMenu /> */}
        {/* Navbar */}
        <div>
          {/* <Navbar /> */}
        </div>

      </div>
    );
  }

}

export default Header;