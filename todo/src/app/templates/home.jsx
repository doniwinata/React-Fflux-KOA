import React from 'react';
import Main from '../components/main'; // Our custom react component
import Navbar from '../components/navbar';
import PostAvatar from "../components/postAvatar";
import Dashboard from "../pages/dashboard";
import { Route, RouteHandler, Link } from 'react-router';
const Home =React.createClass({
  render(){
    const standardActions = ("");
    return(
    <div>
      <Navbar/>

    <RouteHandler/>
    </div>

  )}
});

export default Home;
