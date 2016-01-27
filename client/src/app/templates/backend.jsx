import React from 'react';
import { Route, RouteHandler, Link } from 'react-router';
import RouterContainer from '../services/RouterContainer';
import LoginStore from '../stores/Login-store'
import AuthService from '../services/Auth';
export default class AuthenticatedApp extends React.Component {
  constructor() {
    super()
    this.state = this._getLoginState();
    if(!this.state.userLoggedIn)
    {
      RouterContainer.get().transitionTo('/home/login');
    }
  }

  _getLoginState() {
    return {
      userLoggedIn: LoginStore.isLoggedIn()
    };
  }

  componentDidMount() {
    this.changeListener = this._onChange.bind(this);
    LoginStore.addChangeListener(this.changeListener);
  }

  _onChange() {
    this.setState(this._getLoginState());
  }

  componentWillUnmount() {
    LoginStore.removeChangeListener(this.changeListener);
  }

  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-default">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">React Flux app with JWT authentication</a>
          </div>
          {this.headerItems}
        </nav>
        <RouteHandler/>
      </div>
    );
  }

  logout(e) {
    e.preventDefault();
    AuthService.logout();
  }

  get headerItems() {
    if (!this.state.userLoggedIn) {
      return (
        <ul >
          <li>
            <Link to="login">Login</Link>
          </li>
          <li>

          </li>
        </ul>)
      } else {
        return (
          <ul >
            <li>
              <Link to="home">Home</Link>
            </li>

            <li>
              <a href="" onClick={this.logout}>Logout</a>
            </li>
          </ul>)
        }
      }
    }
