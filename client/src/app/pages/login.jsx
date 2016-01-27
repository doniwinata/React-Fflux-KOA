import React from 'react';
import TextField from 'material-ui/lib/text-field';
import Avatar from 'material-ui/lib/avatar';
import ReactMixin from 'react-mixin';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import LightRawTheme from 'material-ui/lib/styles/raw-themes/light-raw-theme';
import Colors from 'material-ui/lib/styles/colors';
import LinkedStateMixin from 'react-addons-linked-state-mixin';
import RaisedButton from 'material-ui/lib/raised-button';
import LoginActions from '../actions/login-actions';
import LoginStore from '../stores/login-store';
import AccountCircle from 'material-ui/lib/svg-icons/action/face';
import Auth from '../services/Auth';
import Paper from 'material-ui/lib/paper';
export default class Login extends React.Component {


  constructor() {
    super()
    this.errorStyle = {
      textAlign: "left"
    }
    this.iconStyle = {
      fill: "#9E9E9E",
      width: "60px!important",
      height:"60px!important",
    }
    this.state = {
      email: '',
      password: '',
      emailError:'',
      passwordError:'',
      errorLogin:'',
      muiTheme: ThemeManager.getMuiTheme(LightRawTheme),
    };

  }


  //pass down updated theme to children
  getChildContext () {

    return {
      muiTheme: this.state.muiTheme,
    };
  }
  componentWillMount() {
    let newMuiTheme = ThemeManager.modifyRawThemePalette(this.state.muiTheme, {
      primary1Color: Colors.black,
      primary2Color: Colors.grey100,
      primary3Color: Colors.grey100,
      secondary1Color: Colors.black,
      accent1Color: Colors.black,
      accent2Color: Colors.black,
      accent3Color: Colors.black,
      textColor: Colors.black,
      alternateTextColor: Colors.white,
      canvasColor: Colors.white,
      borderColor: Colors.grey300,
      pickerHeaderColor: Colors.cyan500,
    });

    this.setState({
      muiTheme: newMuiTheme,
    });
  }
  login(e) {
    e.preventDefault();
    if(!this.state.email){
      this.setState({emailError :  "Email is required..."}) ;
    }
    if(!this.state.password){
      this.setState({passwordError :  "Password is required..."}) ;
    }

    if(this.state.password && this.state.email)
    {
      var self = this;
      Auth.login(this.state.email, this.state.password)
      .then(function(data){
        alert(data);
      })
      .catch(function(err) {

        self.setState({errorLogin :err.data.message});
        alert(err);
      });

    }
  }

  handleEmailChange(){
    if(this.state.email){
      this.state.emailError ="";
    }
  }
  handlePasswordChange(){
    if(this.state.password){
      this.state.passwordError ="";
    }
  }

  render() {

    return (
      <div className="backgroundLogin">
        <div className="row center-xs">
          <div className="col-xs-10
            col-sm-10
            col-md-6
            col-lg-5 loginBox">
            <Paper  zDepth={3} rounded={false} className = "paperBox">
              <h1>LOGIN </h1>
              <AccountCircle style={this.iconStyle}/>


              <div className="box">
                <div className='errorClass'>{this.state.errorLogin}</div>
                <form action={this.onSubmit} method="POST">
                  <TextField type="email" errorStyle={this.errorStyle} errorText={this.state.emailError} onChange={this.handleEmailChange()}  valueLink={this.linkState('email')} hintText="Email" floatingLabelText="Email Adress" />
                  <br/>
                  <TextField type="password" errorStyle={this.errorStyle} errorText={this.state.passwordError} onChange={this.handlePasswordChange()}  valueLink={this.linkState('password')} hintText="Password" floatingLabelText="Password" />
                  <br/>
                  <RaisedButton onClick={this.login.bind(this)}  hoverColor={Colors.blueGrey100} label="Login" />
                </form>
              </div>
            </Paper>
          </div>
        </div>
      </div>
    );
  }
}
Login.childContextTypes = {muiTheme: React.PropTypes.object,}
ReactMixin(Login.prototype,LinkedStateMixin);
export default Login;
