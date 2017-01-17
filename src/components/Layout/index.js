import React, { PropTypes, Component } from 'react';
import { Grid } from 'react-bootstrap';
import './style.css';

import Header from '../Header';

export default class Layout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div className="app-container">
        <Header />
        <div className="app-content">
          <Grid>
            {this.props.children}
          </Grid>
        </div>
      </div>
    );
  }
}