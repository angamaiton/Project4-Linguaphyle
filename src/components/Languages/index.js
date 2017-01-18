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
    const languages = [
      {
        id: 1,
        name: 'Indo-European',
        description: 'The predecessor of all modern European languages.'
      },
      {
        id: 2,
        name: 'Altaic',
        description: 'The (hypothetical) predecessor of all modern Japonic/Turkish languages.'
      },
      {
        id: 3,
        name: 'Sino-Tibetan',
        description: 'The predecessor of Chinese and Tibetan.'
      },
      {
        id: 4,
        name: 'Niger-Congo',
        description: 'The predecessor of West African languages.'
      },
      {
        id: 5,
        name: 'Austronesian',
        description: 'The predecessor of the various Indonesian languages.'
      }
    ];
    return (
      <div className={cx('Languages', className)} {...props}>
        <Col xs={12} md={12}>
          <PageHeader>Languages</PageHeader>
          <Col xs={12} md={8}>
            <LanguageSearchForm />
            {this.props.children}
          </Col>
          <Col md={4}>
            <LanguagesList languages={languages} />
          </Col>
        </Col>
      </div>
    );
  }
}