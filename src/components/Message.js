import React from 'react';
import PropTypes from 'prop-types';
import Reflux from 'reflux';
import AppStore from '../stores/AppStore';
import * as HTTP from '../services/http';

import '../stylesheets/Message.css';

class Message extends Reflux.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.store = AppStore;
    this.storeKeys = ['user_data'];
  }

  render() {
    return(
    <div className="Message">
      <p className="Message-text">{ this.props.mensaje }</p>
    </div>
  );
  }
}

Message.propTypes = {
  mensaje: PropTypes.string
}

export default Message;
