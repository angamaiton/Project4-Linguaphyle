import React, { Component } from 'react';
import { Col, PageHeader } from 'react-bootstrap';

export default class Index extends Component { 
  render() {
    return (
      <div className="home">
        <Col xs={12} md={8}>
          <PageHeader>Home</PageHeader>
        </Col>
      </div>
    );
  }
}