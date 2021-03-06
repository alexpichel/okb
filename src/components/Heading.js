import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';

import style from '../styles/heading';

const Heading = props => {
  const {
    title,
    agency,
    subTitle,
    children,
    themeStyle = style,
    customStyle = '',
    special = false,
  } = props;

  return (
    <header
      className={`${cx(themeStyle, customStyle)} ${special ? 'special' : ''}`}
    >
      {title ? <h1>{title}</h1> : children}
      <h2>{agency}</h2>
      <h2><em>{subTitle}</em></h2>
    </header>
  );
};

Heading.propTypes = {
  title: PropTypes.string,
  agency: PropTypes.string,
  subTitle: PropTypes.string,
  children: PropTypes.node,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
  special: PropTypes.bool,
};

export default Heading;
