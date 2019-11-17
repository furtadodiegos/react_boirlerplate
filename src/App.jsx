import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

import { ThemeContext } from './contexts';

function App({ children }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />

        {children}

        {/*<Snackbar />*/}
        {/*<Drawer />*/}
        {/*<BottomNavigationComponent />*/}
      </ThemeProvider>
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
