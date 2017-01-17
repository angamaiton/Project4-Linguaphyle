import React, { Component } from 'react';
import cx from 'classnames';

import './style.css';
import Header from '../Header';
import Layout from '../Layout';

class App extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}
  
  render() {
    const { className, ...props } = this.props;
    return (
      <div className={cx('App', className)} {...props}>
        <Header />
        <Layout>
          {this.props.children}
        </Layout>
      </div>
    );
  }
}

export default App;
