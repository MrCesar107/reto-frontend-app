import React from 'react';
import Reflux from 'reflux';
import AppStore from '../stores/AppStore';
import HomeStore from '../stores/HomeStore';
import Actions from '../actions/Actions';
import { Link, Redirect } from 'react-router-dom';

import '../stylesheets/Home.css'

//Components
import Navbar from '../components/Navbar';
import Card from '../components/Card';


class Home extends Reflux.Component {
  constructor(props) {
    super(props);

    this.state = {}
    this.store = AppStore;
    this.storeKeys = ['isLogged', 'logged', 'user_data', 'data_viajes', 'fechas_viajes', 'i'];
    this.getViajes = this.getViajes.bind(this);
  }

  getViajes(objeto) {
    Actions.getViajes(objeto = {
      auth_token: this.state.user_data.auth_token,
      email: this.state.user_data.email
    });
  }

  componentDidMount() {
    if(this.state.isLogged) {
      setTimeout(() => {
        this.getViajes();
      }, 300);
    }

  }

  render(){
    console.log(this.state.data_viajes);
    console.log(this.state.fechas_viajes);

    let viajes = this.state.data_viajes.map((currentValue, index, array) => {

      if(currentValue.date === this.state.fechas_viajes[0]) {
        return(
          <Card key={index}  name={currentValue.name} dates={currentValue.date} time={currentValue.time} trip_stops_start={currentValue.trip_stops[0].address}
            trip_stops_end={currentValue.trip_stops[currentValue.trip_stops.length - 1].address}/>
        );
      }

    });

    let viajes2 = this.state.data_viajes.map((currentValue, index, array) => {

      if(currentValue.date === this.state.fechas_viajes[1]) {
        return(
          <Card key={index}  name={currentValue.name} dates={currentValue.date} time={currentValue.time} trip_stops_start={currentValue.trip_stops[0].address}
            trip_stops_end={currentValue.trip_stops[currentValue.trip_stops.length - 1].address}/>
        );
      }

    });

    let viajes3 = this.state.data_viajes.map((currentValue, index, array) => {

      if(currentValue.date === this.state.fechas_viajes[2]) {
        return(
          <Card key={index}  name={currentValue.name} dates={currentValue.date} time={currentValue.time} trip_stops_start={currentValue.trip_stops[0].address}
            trip_stops_end={currentValue.trip_stops[currentValue.trip_stops.length - 1].address}/>
        );
      }

    });

    let viajes4 = this.state.data_viajes.map((currentValue, index, array) => {

      if(currentValue.date === this.state.fechas_viajes[3]) {
        return(
          <Card key={index}  name={currentValue.name} dates={currentValue.date} time={currentValue.time} trip_stops_start={currentValue.trip_stops[0].address}
            trip_stops_end={currentValue.trip_stops[currentValue.trip_stops.length - 1].address}/>
        );
      }

    });

    let viajes5 = this.state.data_viajes.map((currentValue, index, array) => {

      if(currentValue.date === this.state.fechas_viajes[4]) {
        return(
          <Card key={index}  name={currentValue.name} dates={currentValue.date} time={currentValue.time} trip_stops_start={currentValue.trip_stops[0].address}
            trip_stops_end={currentValue.trip_stops[currentValue.trip_stops.length - 1].address}/>
        );
      }

    });

    let viajes6 = this.state.data_viajes.map((currentValue, index, array) => {

      if(currentValue.date === this.state.fechas_viajes[5]) {
        return(
          <Card key={index}  name={currentValue.name} dates={currentValue.date} time={currentValue.time} trip_stops_start={currentValue.trip_stops[0].address}
            trip_stops_end={currentValue.trip_stops[currentValue.trip_stops.length - 1].address}/>
        );
      }

    });

    return(
      <div className="Home">
        { this.state.isLogged ?
          <React.Fragment>
            <Navbar/>
            <p className="Home-titulo">Corridas asignadas</p>
            <div className="Home-container">
              { viajes }
              { viajes2 }
              { viajes3 }
              { viajes4 }
              { viajes5 }
              { viajes6 }
            </div>
          </React.Fragment>
          :
          <Redirect to="/"/>
        }
      </div>
    );
  }
}

export default Home;
