import React, { PropTypes, Component } from 'react';
import { Col, PageHeader } from 'react-bootstrap';
import cx from 'classnames';

import LanguageSearchForm from './LanguageSearchForm';
import LanguagesList from './LanguagesList';
import './style.css';

export default class Languages extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={cx('Languages', className)} {...props}>
        <Col xs={12} md={12}>
          <PageHeader>Languages</PageHeader>
          <Col xs={12} md={8}>
            <LanguageSearchForm />
          </Col>
          <LanguagesList />
          {this.props.children}
        </Col>
      </div>
    );
  }
}