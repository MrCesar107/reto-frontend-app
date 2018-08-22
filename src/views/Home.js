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
    this.storeKeys = ['isLogged', 'logged', 'user_data', 'data_viajes', 'fechas_viajes', 'dates'];
    this.getViajes = this.getViajes.bind(this);
    this.getFecha = this.getFecha.bind(this);
  }

  getViajes(objeto) {
    Actions.getViajes(objeto = {
      auth_token: this.state.user_data.auth_token,
      email: this.state.user_data.email
    });
  }

  getFecha(fecha) {

    let dias = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '16'
                , '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];

    let meses = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

    let meses_letras = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre'
                        , 'noviembre', 'diciembre'];

    let nuevaFecha = '';

    for(let i = 0; i < meses.length; i++) {
      for(let j = 0; j < dias.length; j++) {

        if(fecha.getDate() + 1 == dias[j] && fecha.getMonth() + 1 == meses[i]) {
          nuevaFecha = `${dias[j]} de ${meses_letras[i]}`;
        }

      }
    }

    return nuevaFecha;

  }

  componentDidMount() {
    if(this.state.isLogged) {
      setTimeout(() => {
        this.getViajes();
      }, 300);
    }

  }

  render(){

    let dates = [new Date(this.state.fechas_viajes[0]), new Date(this.state.fechas_viajes[1])
                  , new Date(this.state.fechas_viajes[2]), new Date(this.state.fechas_viajes[3])
                  , new Date(this.state.fechas_viajes[4]), new Date(this.state.fechas_viajes[5])
                  , new Date(this.state.fechas_viajes[6]), new Date(this.state.fechas_viajes[7])
                  , new Date(this.state.fechas_viajes[8])];


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

    let viajes7 = this.state.data_viajes.map((currentValue, index, array) => {

      if(currentValue.date === this.state.fechas_viajes[6]) {
        return(
          <Card key={index}  name={currentValue.name} dates={currentValue.date} time={currentValue.time} trip_stops_start={currentValue.trip_stops[0].address}
            trip_stops_end={currentValue.trip_stops[currentValue.trip_stops.length - 1].address}/>
        );
      }

    });

    let viajes8 = this.state.data_viajes.map((currentValue, index, array) => {

      if(currentValue.date === this.state.fechas_viajes[7]) {
        return(
          <Card key={index}  name={currentValue.name} dates={currentValue.date} time={currentValue.time} trip_stops_start={currentValue.trip_stops[0].address}
            trip_stops_end={currentValue.trip_stops[currentValue.trip_stops.length - 1].address}/>
        );
      }

    });

    let viajes9 = this.state.data_viajes.map((currentValue, index, array) => {

      if(currentValue.date === this.state.fechas_viajes[8]) {
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
              <p className="Home-fecha">{ this.getFecha(dates[0]) }</p>
              { viajes }
              <p className="Home-fecha">{ this.getFecha(dates[1]) }</p>
              { viajes2 }
              <p className="Home-fecha">{ this.getFecha(dates[2]) }</p>
              { viajes3 }
              <p className="Home-fecha">{ this.getFecha(dates[3]) }</p>
              { viajes4 }
              <p className="Home-fecha">{ this.getFecha(dates[4]) }</p>
              { viajes5 }
              <p className="Home-fecha">{ this.getFecha(dates[5]) }</p>
              { viajes6 }
              <p className="Home-fecha">{ this.getFecha(dates[6]) }</p>
              { viajes7 }
              <p className="Home-fecha">{ this.getFecha(dates[7]) }</p>
              { viajes8 }
              <p className="Home-fecha">{ this.getFecha(dates[8]) }</p>
              { viajes9 }
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
