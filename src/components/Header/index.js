import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router';
import './style.css';

export default class Header extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Linguaphyle</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="/"><Link to="/">Home</Link></NavItem>
          <NavItem eventKey={2} href="#"><Link to="/about">About</Link></NavItem>
          <NavDropdown eventKey={3} title="Languages" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>
              <Link to="/languages">Language list</Link>
            </MenuItem>
            <MenuItem eventKey={3.2}>
              <Link to="/linguistics">Linguistics</Link>
            </MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">Link Right</NavItem>
          <NavItem eventKey={2} href="#">Link Right</NavItem>
        </Nav>
      </Navbar.Collapse>
      </Navbar>
    );
  }
}