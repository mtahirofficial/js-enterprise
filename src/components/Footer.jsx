import React, { Component } from 'react';
import './Footer.css';
import { Link } from "react-router-dom"

class Footer extends Component {
  year = new Date().getFullYear();
  render() {
    return (

      <div className="container-fluid footer py-4">
        <div className="row">
          <div className="col-sm-5  text-center">
            <span className="Copyright">
              <span className="copySymbol">&copy;</span> JS Enterprise {this.year}.
              </span>
          </div>
          <div className="offset-sm-2 col-sm-5 text-center">
            <span className="developer">
              Developed By: <Link className="Fm-DevnDesign" to="">Fm DevnDesign</Link>
            </span>
          </div>
        </div>
      </div>

    );
  }

}

export default Footer;