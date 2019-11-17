import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider } from '../contexts';

const Contexts = ({ children }) => <ThemeProvider>{children}</ThemeProvider>;

Contexts.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Contexts;
