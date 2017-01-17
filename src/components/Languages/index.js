import React, { PropTypes, Component } from 'react';
import cx from 'classnames';

import './style.css';

export default class Languages extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}
  render() {
    const { className, ...props } = this.props;
    return (
      <div className={cx('NotFound', className)} {...props}>
        <h1>
          YASSS
        </h1>
      </div>
    );
  }
}