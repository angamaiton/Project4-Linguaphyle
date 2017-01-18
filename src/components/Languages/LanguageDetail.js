import React, { PropTypes, Component } from 'react';
import { Col } from 'react-bootstrap';

export default class LanguageDetail extends Component {
  static propTypes = {
    id: PropTypes.number,
    description: PropTypes.string,
  };

  render() {
    return (
      <div className="langDetails">
        <h3>Language Details</h3>
        <h3>{this.props.params.id}</h3>
      </div>
    );
  }
}