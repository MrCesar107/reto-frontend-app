import Reflux from 'reflux';
import Actions from '../actions/Actions';
import * as HTTP from '../services/http';

class HomeStore extends Reflux.Store {
  constructor(props) {
    super(props);

    this.state = {
      isLogged: false,
      logged: false
    }
  }
}

export default HomeStore;
