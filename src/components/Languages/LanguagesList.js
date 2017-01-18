import React, { PropTypes, Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Col, Nav, NavItem } from 'react-bootstrap';

export default class LanguagesList extends Component {
  static propTypes = {
    languages: PropTypes.array,
  };

  render() {
    return (
      <Nav bsStyle="pills" stacked activeKey={1}>
        {this.props.languages.map((lang) => <LinkContainer key={lang.id} to={`/languages/${lang.id}`}><NavItem>{lang.name}</NavItem></LinkContainer>)}
      </Nav>
    );
  }
}