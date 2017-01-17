import React, { PropTypes, Component } from 'react';
import { Col } from 'react-bootstrap'
import cx from 'classnames';

import './style.css';

export default class Languages extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}
  render() {
    const { className, ...props } = this.props;
    return (
      <div className={cx('Languages', className)} {...props}>
        <Col xs={12} md={8}>
          <h1>Hello</h1>
        </Col>
      </div>
    );
  }
}