import React, { Component } from 'react';
import './Footer.css';
import { Link } from "react-router-dom"
import Slider from './Slider';

class Home extends Component {
  render() {
    return (
      <div>
        <Slider />
      </div>
    );
  }

}

export default Home;