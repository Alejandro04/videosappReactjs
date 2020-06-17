import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const NavBar = (props) => {
  return (
    <div>
      <Nav>
        <NavItem>
          <NavLink href="/">HOME</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default NavBar;