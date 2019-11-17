import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

import { darkTheme, lightTheme } from '../configs/theme';

const ThemeContext = createContext();
const { Provider, Consumer } = ThemeContext;

function getTheme() {
  return sessionStorage.getItem('darkTheme') ? darkTheme : lightTheme;
}

const ThemeProvider = ({ children }) => {
  const [state, setState] = useState({ theme: getTheme() });

  const setTheme = (theme) => setState({ theme });

  return (
    <Provider
      value={{
        ...state,
        setTheme,
      }}
    >
      {children}
    </Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ThemeProvider, Consumer as ThemeConsumer, ThemeContext };
