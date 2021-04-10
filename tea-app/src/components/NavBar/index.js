import React from "react";

// import { grommet } from "grommet/themes";
import { Button, Grommet, Nav } from "grommet";
import { Home, Login, Logout } from "grommet-icons";
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
        {isLoggedin ? <Button onClick={handleLogout}><Logout /></Button> : <Link to='/signin'><Login /></ Link> }
      </Nav>
    </Grommet>
  );
}
export default NavBar;
