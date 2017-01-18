import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import './style.css';

export default class Header extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect fixedTop>
        <Navbar.Header>
          <Navbar.Brand>Linguaphyle</Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
        <Nav>
          <IndexLinkContainer to="/">
              <NavItem eventKey={1}>Home</NavItem>
          </IndexLinkContainer>
          <LinkContainer to="/about">
              <NavItem eventKey={2}>About</NavItem>
          </LinkContainer>
          <NavDropdown eventKey={3} title="Languages" id="basic-nav-dropdown">
            <LinkContainer to="/languages">
              <MenuItem eventKey={3.1}>Language List</MenuItem>
            </LinkContainer>
            <LinkContainer to="/linguistics">
              <MenuItem eventKey={3.2}>Linguistics</MenuItem>
            </LinkContainer>
          </NavDropdown>
        </Nav>
        <Nav pullRight>
          <LinkContainer to="/login">
            <MenuItem eventKey={4}>Log In</MenuItem>
          </LinkContainer>
          <LinkContainer to="/register">
            <MenuItem eventKey={5}>Sign Up</MenuItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
      </Navbar>
    );
  }
}