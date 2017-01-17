import React, { PropTypes, Component } from 'react';
import { Col, PageHeader } from 'react-bootstrap'
import cx from 'classnames';

import './style.css';

export default class Linguistics extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}
  render() {
    const { className, ...props } = this.props;
    return (
      <div className={cx('Linguistics', className)} {...props}>
        <Col xs={12} md={8}>
          <PageHeader>Linguistics</PageHeader>
        </Col>
      </div>
    );
  }
}