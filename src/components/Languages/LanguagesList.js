import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import { Col } from 'react-bootstrap';

export default class LanguagesList extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    languages: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })).isRequired,
  };

  render() {
    return (
      <Col>
        {this.props.languages.map((lang) => (<Link key={lang.id} className={s.link} to={`/languages/${lang.id}`}>{lang.name}</Link>))}
      </Col>
    );
  }
}