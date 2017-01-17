import React, { Component } from 'react';
import { Col, PageHeader } from 'react-bootstrap';

export default class About extends Component {
  render() {
    return (
      <Col xs={12} md={8}>
        <PageHeader>About</PageHeader>
      </Col>
    );
  }
}