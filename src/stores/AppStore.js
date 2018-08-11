import Reflux from 'reflux';
import Actions from '../actions/Actions';
import * as HTTP from '../services/http';

class AppStore extends Reflux.Store {
  constructor(){
    super();
    this.listenables = Actions;
    this.state = {
      email: '',
      password: '',
      isLogged: false,
      logged: false,
      auth: {},
      user_data: [],
      data_viajes: [],
      fechas_viajes: []
    }
  }

  login(objeto) {
    const self = this;

    HTTP.post('https://jettymx-st.herokuapp.com/api/drivers/session', objeto).then((response) => {

      if(response !== "undefined" && response.auth_token !== "") {
        self.setState({ user_data: response });
        self.setState({ isLogged: true });
      }
      else {
        self.setState({ user_data: response });
      }

    });
  }

  logout() {
    const self = this;

    self.setState({ isLogged: false });
  }

  getViajes(objeto) {

    let fechas = [];

    //Esta función elimina los duplicados de un array
    function eliminarDuplicados(arr) {
      let i,
          len = arr.length,
          out = [],
          obj = {};

      for (i = 0; i < len; i++) {
        obj[arr[i]] = 0;
      }
      for (i in obj) {
        out.push(i);
      }
      return out;
    }

    HTTP.get('https://jettymx-st.herokuapp.com/api/drivers/trips', objeto).then((response) => {
      if(response !== "undefined") {
        this.setState({ data_viajes: response });

        for(let i = 0; i < this.state.data_viajes.length; i++) {
          fechas.push(this.state.data_viajes[i].date);
        }

        fechas = eliminarDuplicados(fechas);

        this.setState({ fechas_viajes: fechas });
      }
    });
  }
}

export default AppStore;
