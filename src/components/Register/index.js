import React, { Component } from 'react';
import { Col, PageHeader } from 'react-bootstrap';

export default class Register extends Component { 
  render() {
    return (
      <div className="register">
        <Col xs={12} md={8}>
          <PageHeader>Sign Up</PageHeader>
        </Col>
      </div>
    );
  }
}