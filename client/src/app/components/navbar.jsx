import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import Map from 'material-ui/lib/svg-icons/maps/map';
import MenuItem from 'material-ui/lib/menus/menu-item';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import LightRawTheme from 'material-ui/lib/styles/raw-themes/light-raw-theme';
import Colors from 'material-ui/lib/styles/colors';

import FlatButton from 'material-ui/lib/flat-button';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import SupervisorAccount from 'material-ui/lib/svg-icons/action/supervisor-account';

import {Link}  from 'react-router';
const containerStyle = {
  paddingTop:"-10px !important",color:"red",
};
const titleStyle = {
  color:"inherit",
  textDecoration: "none"
}

const Navbar = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object,
  },

  getInitialState() {
    return {
      muiTheme: ThemeManager.getMuiTheme(LightRawTheme),
      open: false,
    };
  },

  getChildContext() {
    return {
      muiTheme: this.state.muiTheme,
    };
  },

  componentWillMount() {
    let newMuiTheme = ThemeManager.modifyRawThemePalette(this.state.muiTheme, {
      primary1Color: Colors.blueGrey100,
      primary2Color: Colors.grey100,
      primary3Color: Colors.grey100,
      secondary1Color: Colors.black,
      accent1Color: Colors.black,
      accent2Color: Colors.black,
      accent3Color: Colors.black,
      textColor: Colors.black,
      alternateTextColor: Colors.black,
      canvasColor: Colors.white,
      borderColor: Colors.grey300,
      pickerHeaderColor: Colors.cyan500,
    });

    this.setState({muiTheme: newMuiTheme});
  },

  _handleRequestClose() {
    this.setState({
      open: false,
    });
  },

  _handleTouchTap() {
    this.setState({
      open: true,
    });
  },
  render() {
    const standardActions = ("");

    return (
      <AppBar
        title={<Link to="/" style={titleStyle}> Title</Link>}
        style={containerStyle}

        iconElementRight={

          <div>
            <FlatButton  hoverColor={Colors.blueGrey100} label="Lokasi Vihara" />
            <FlatButton keyboardFocused={true} hoverColor={Colors.blueGrey100} label="Story" />
            <IconButton  tooltip="Lokasi Vihara"><Map /></IconButton>

            <IconMenu
              iconButtonElement={
                <IconButton> <MoreVertIcon /></IconButton>
              }
              targetOrigin={{horizontal: 'right', vertical: 'top'}}
              anchorOrigin={{horizontal: 'right', vertical: 'top'}}
              >
              <MenuItem  containerElement={<Link to="/home/login" />} linkButton={true} leftIcon={<SupervisorAccount />} >Login </MenuItem>

            </IconMenu>


          </div>
        }

        />
    );
  },
});

export default Navbar;
