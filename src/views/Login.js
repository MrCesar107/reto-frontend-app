import React from 'react';
import Reflux from 'reflux';
import AppStore from '../stores/AppStore';
import Actions from '../actions/Actions';
import { Redirect } from 'react-router-dom';

//Components
import Message from '../components/Message'

import logo from '../logo-jetty.png';

import '../stylesheets/Login.css';

class Login extends Reflux.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.store = AppStore;
    this.storeKeys = ['email', 'password', 'isLogged', 'auth', 'user_data'];
    this.login = this.login.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.login();
    if(this.state.email !== "" && this.state.password !== "") {

      setTimeout(() => {
        this.setState({email: '', password: ''});
      }, 600);

    } else {
      alert("Por favor, escriba su correo y contraseña para iniciar sesión");
    }
  }

  login(objeto) {
    Actions.login(objeto = {
      "driver": {
        "email": this.state.email,
        "password": this.state.password
      }
    });
  }

  render() {

    return(
      <div className="Login">
        { this.state.isLogged ?
          <Redirect to="/home/"/>
          :
          <div className="Login-box">
            <img className="Login-image" src={logo} />

            <Message mensaje={this.state.user_data.message}/>

            <form className="Login-form" onSubmit={this.onSubmit}>
              <div className="Login-box-input">
                <input className="Login-email-input" type="email" value={this.state.email} required
                  onChange={(e) => { this.setState({email: e.target.value}) }} placeholder="Correo electrónico"/>
              </div>
              <div className="Login-box-input">
                <input className="Login-password-input" type="password" value={this.state.password} required
                  onChange={(e) => { this.setState({password: e.target.value}) }} placeholder="Contraseña"/>
              </div>
              <button type="Submit" className="Login-submit">Iniciar Sesión</button>
            </form>
          </div>
        }
      </div>
    );
  }
}

export default Login;
