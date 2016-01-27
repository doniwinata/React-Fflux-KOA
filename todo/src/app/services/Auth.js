import axios from 'axios';
import when from 'when';
import {BASE_URL} from '../config';
import LoginActions from '../actions/login-actions';

const rest = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});
class AuthService {

  login(email, password) {
    return this.handleAuth(when(rest.post('/auth/login',{email : email, password: password})));
  }

  logout() {
    LoginActions.logoutUser();
  }

  signup(username, password, extra) {
    return this.handleAuth(when(request({
      url: SIGNUP_URL,
      method: 'POST',
      crossOrigin: true,
      type: 'json',
      data: {
        username, password, extra
      }
    })));
  }

  handleAuth(loginPromise) {
    return loginPromise
      .then(function(response) {
        var jwt = 'jwt_sementara';

        LoginActions.loginUser(jwt);
        return true;
      });
  }
}

export default new AuthService()
