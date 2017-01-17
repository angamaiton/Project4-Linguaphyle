import React, { Component } from 'react';
import cx from 'classnames';

import './style.css';
import Header from '../Header';

class App extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}
  
  render() {
    const { className, ...props } = this.props;
    return (
      <div className={cx('App', className)} {...props}>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default App;
