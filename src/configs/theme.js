import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme
export const lightTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#915cf7',
    },
    secondary: {
      main: '#00ffda',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
      gradient: 'linear-gradient(to right, #915cf7, #00ffda)',
    },
    text: {
      hint: '#757575',
    },
  },
});

export const darkTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#00ffda',
    },
    secondary: {
      main: '#915cf7',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#1f282d',
    },
    text: {
      primary: '#fff',
      hint: '#757575',
    },
  },
});
