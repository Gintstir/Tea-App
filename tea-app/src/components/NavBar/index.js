import React from "react";

// import { grommet } from "grommet/themes";
import { Button, Grommet, Nav } from "grommet";
import { Drawer, Home, Login, Logout } from "grommet-icons";
import { Link } from "react-router-dom";

import Auth from '../../utils/auth'

const NavBar = ({ isLoggedin }) => {

  const handleLogout = () => {
    Auth.logout()
  }
  
  return (
    <Grommet>
      <Nav direction="row" pad="medium">
        <Link to='/'><Home /></ Link>
        {isLoggedin && <Link to='/pantry'><Drawer /></Link>}
        {isLoggedin ? <Button margin={{left: 'auto'}} onClick={handleLogout}><Logout /></Button> : <Link  style={{marginLeft: 'auto'}} to='/signin'><Login /></ Link> }
      </Nav>
    </Grommet>
  );
}
export default NavBar;
