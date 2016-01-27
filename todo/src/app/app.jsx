import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Home from './templates/home';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import { Router, Route, Link, browserHistory } from 'react-router'
import RouterContainer from './services/RouterContainer';
import LoginActions from './actions/login-actions';
import Backend from './templates/backend';

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

const App =React.createClass({
  render(){
    const standardActions = ("");
    return(
    <div>
     {this.props.children}
     </div>
    )}
  });


  let jwt = localStorage.getItem('jwt');
  if (jwt) {
    LoginActions.loginUser(jwt);
  }

  ReactDOM.render(
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="/" component={Home} />
        <Route path="login" component={Login} />
      </Route>
    </Router>
    , document.getElementById('app'));
