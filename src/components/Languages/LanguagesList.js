import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import { Col, Nav, NavItem } from 'react-bootstrap';

export default class LanguagesList extends Component {
  // static propTypes = {};

  render() {
    return (
      <Col md={4}>
        <Nav bsStyle="pills" stacked activeKey={1}>
          <NavItem eventKey={1}><Link to="/languages/1">Language 1</Link></NavItem>
          <NavItem eventKey={2}><Link to="/languages/2">Language 2</Link></NavItem>
        </Nav>
      </Col>
    );
  }
}