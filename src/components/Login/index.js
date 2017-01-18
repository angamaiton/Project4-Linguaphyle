import React, { Component } from 'react';
import { Col, PageHeader } from 'react-bootstrap';

export default class Login extends Component { 
  render() {
    return (
      <div className="login">
        <Col xs={12} md={8}>
          <PageHeader>Log In</PageHeader>
        </Col>
      </div>
    );
  }
}