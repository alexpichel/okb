import React from 'react';

import style from '../styles/footer';
import BaseFooter from './BaseFooter';

const Footer = props => {
  const { themeStyle = style, ...rest } = props;

  return <BaseFooter themeStyle={themeStyle} {...rest} />;
};

export default Footer;
