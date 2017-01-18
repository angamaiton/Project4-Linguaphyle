import React, { PropTypes, Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Col, Nav, NavItem } from 'react-bootstrap';

export default class LanguagesList extends Component {
  // static propTypes = {};

  render() {
    return (
      <Col md={4}>
        <Nav bsStyle="pills" stacked activeKey={1}>
          <LinkContainer to="/languages/1">
            <NavItem eventKey={1.1}>Indo-European</NavItem>
          </LinkContainer>
          <LinkContainer to="/languages/2">
            <NavItem eventKey={1.2}>Altaic</NavItem>
          </LinkContainer>
        </Nav>
      </Col>
    );
  }
}