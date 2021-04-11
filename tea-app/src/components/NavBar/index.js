import React from "react";

// import { grommet } from "grommet/themes";
import { Button, Grommet, Nav, grommet } from "grommet";
import { Drawer, Home, Login, Logout } from "grommet-icons";
import { Link } from "react-router-dom";
import { deepMerge } from 'grommet/utils';

import Auth from '../../utils/auth'

const customTheme = deepMerge(grommet, {
  global: {
    colors: {      
      // Setting new colors
      blue: "#00C8FF",
      black: "6F7269",
      green: "#749A5C",
      roobois: "#FC6161",
      purple: "#A2065A",
      white: "#FBFBF7",
      red: "#EE6373",
      orange: "#FFBC44",
      yellow: "#FFEB59",     
      
      }
    
  },
});

const NavBar = ({ isLoggedin }) => {

  const handleLogout = () => {
    Auth.logout()
  }
  
  return (
    <Grommet theme={customTheme}>
      <Nav direction="row" pad="small" align="center" background="purple">
        <Link to='/'><Home /></ Link>
        {isLoggedin && <Link to='/pantry'><Drawer /></Link>}
        {isLoggedin ? <Button margin={{left: 'auto'}} onClick={handleLogout}><Logout /></Button> : <Link  style={{marginLeft: 'auto'}} to='/signin'><Login /></ Link> }
      </Nav>
    </Grommet>
  );
}
export default NavBar;
