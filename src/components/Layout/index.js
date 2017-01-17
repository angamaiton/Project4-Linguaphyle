import React, { PropTypes } from 'react';
import './style.css';

import Header from '../Header';

export default class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div className="app-container">
        <Header />
        <div className="app-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}