import React from 'react';
import Reflux from 'reflux';
import AppStore from '../stores/AppStore';
import Actions from '../actions/Actions';
import { Link } from 'react-router-dom';

import '../stylesheets/Navbar.css';

class Navbar extends Reflux.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.store = AppStore;
    this.storeKeys = ['user_data', 'isLogged'];

    this.login = this.logout.bind(this);
  }

  logout() {
    Actions.logout();
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
            <Link to="/" className="Navbar-nav-link" onClick={(e) => {
              this.logout();
            }}>Salir</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
