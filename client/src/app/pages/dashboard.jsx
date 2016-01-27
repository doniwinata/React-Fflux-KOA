import React from 'react';
import Main from '../components/main';
import PostAvatar from "../components/postAvatar";
import { Router, Route, Link } from 'react-router';
const Dashboard =React.createClass({
  render(){
    const standardActions = ("");
    return(
    <div>

      <div className="row">
        <div className=" col-xs-offset-1 col-xs-10
          col-sm-10
          col-md-8
          col-lg-8">
          <div className="row">
            <div className="box col-xs-12 col-md-6"><PostAvatar/></div>
            <div className="box col-xs-12 col-md-6"><PostAvatar/></div>
            <div className="box col-xs-12 col-md-6"><PostAvatar/></div>
            <div className="box col-xs-12 col-md-6"><PostAvatar/></div>
            <div className="box col-xs-12 col-md-6"><PostAvatar/></div>
          </div>
        </div>
        <div className="col-xs-offset-1 col-xs-10
          col-sm-10
          col-md-2
          col-lg-2">
          <div className="box"><Link to={`/login`}>{"wew"}</Link></div>

        </div>

      </div>


    </div>

  )}
});

export default Dashboard;
