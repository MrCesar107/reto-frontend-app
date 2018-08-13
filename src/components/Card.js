import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../stylesheets/Card.css';

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="Card">
        <p className="Card-text Card-text-subtitle">{ this.props.name }</p>
        <p className="Card-text">Horario de salida</p>
        <p className="Card-text Card-text-subtitle">{ this.props.time }</p>
        <p className="Card-text">{ this.props.trip_stops_start }</p>
        <p className="Card-text">{ this.props.trip_stops_end }</p>
        <button className="Card-button">Ver paradas y usuarios</button>
      </div>
    );
  }
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  trip_stops_start: PropTypes.string.isRequired,
  trip_stops_end: PropTypes.string.isRequired
}

export default Card;
