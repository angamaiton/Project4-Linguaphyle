import React, { PropTypes, Component } from 'react';
import { Col, PageHeader, FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';
import cx from 'classnames';

import './style.css';

export default class Languages extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  constructor(props) {
    super(props);
    this.state = {
      value: '',
    }
  }

  getValidationState = () => {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }


  render() {
    const { className, ...props } = this.props;
    return (
      <div className={cx('Languages', className)} {...props}>
        <Col xs={12} md={8}>
          <PageHeader>Hello</PageHeader>
          <form>
            <FormGroup
              controlId="formBasicText"
              validationState={this.getValidationState()}>
              <ControlLabel>Working example with validation</ControlLabel>
              <FormControl
                type="text"
                value={this.state.value}
                placeholder="Enter text"
              />
              <FormControl.Feedback />
              <HelpBlock>Validation is based on string length.</HelpBlock>
            </FormGroup>
          </form>
        </Col>
      </div>
    );
  }
}