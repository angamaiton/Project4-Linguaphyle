import React, { PropTypes, Component } from 'react';
import { Col } from 'react-bootstrap';

export default class LanguageDetail extends Component {
  static propTypes = {
    id: PropTypes.number,
  };

  render() {
    return (
      <Col md={8}>
        <h3>Language Details</h3>
        <h3>{this.props.params.id}</h3>
      </Col>
    );
  }
}