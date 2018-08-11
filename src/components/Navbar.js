import React from 'react';
import Reflux from 'reflux';
import AppStore from '../stores/AppStore';
import { Link } from 'react-router-dom';

import '../stylesheets/Navbar.css';

class Navbar extends Reflux.Component {
  constructor() {
    super();

    this.state = {};
    this.store = AppStore;
    this.storeKeys = ['user_data', 'isLogged'];
  }

  render() {
    return(
      <div className="Navbar">
        <ul className="Navbar-nav">
          <li className="Navbar-nav-item">
            <img className="Navbar-logo-img" src="https://www.jetty.mx/img/logo-jetty.svg"/>
          </li>
          <li className="Navbar-nav-item Navbar-nav-link">Bienvenido {this.state.user_data.name}</li>
          <li className="Navbar-nav-item">
            <Link to="/" className="Navbar-nav-link" onClick={(e) => { this.setState({ isLogged: false }); }}>Salir</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
