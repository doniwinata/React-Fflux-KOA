import AppDispatcher from '../dispatchers/AppDispatcher.js';
import RouterContainer from '../services/RouterContainer'
import {LOGIN_USER, LOGOUT_USER} from '../config.js';
export default {
  loginUser: (jwt) => {
    var savedJwt = localStorage.getItem('jwt');
    console.log(jwt);
    AppDispatcher.dispatch({
      actionType: LOGIN_USER,
      jwt: jwt
    });

    if (savedJwt !== jwt) {
      localStorage.setItem('jwt', jwt);
    }
  //  var nextPath = RouterContainer.get().getCurrentQuery().nextPath || '/';

    RouterContainer.get().transitionTo('/');

  },
  logoutUser: () => {
    RouterContainer.get().transitionTo('/home');
    localStorage.removeItem('jwt');
    AppDispatcher.dispatch({
      actionType: LOGOUT_USER
    });
  }
}
