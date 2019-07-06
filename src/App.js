import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Order from './components/Order';
import Home from './components/Home';
import Products from './components/Products';
import About from './components/About';
import TopMenu from './components/TopMenu';
import Navbar from './components/Navabr';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="clearfix">
            <Header />
            <TopMenu />
            <Navbar />

          </div>
          <Switch>
            <Route path="/order" component={Order} />
            <Route path="/products" component={Products} />
            <Route path="/about us" component={About} />
            <Route path="/" component={Home} />
            <Route exact path="/" component={Home} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>

    );
  }

}

export default App;
