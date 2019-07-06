import React, { Component } from 'react';
import './Footer.css';
import { Link } from "react-router-dom"

class Footer extends Component {
  year = new Date().getFullYear();
  render() {
    return (
      <div>
        <div className="footer">
          <span className="Copyright">
            <span className="copySymbol">&copy;</span> JS Enterprise {this.year}.
              </span>
          <span className="developer">
            Developed By: <Link className="Fm-DevnDesign" to="">Fm DevnDesign</Link>
          </span>

        </div>
      </div>
    );
  }

}

export default Footer;