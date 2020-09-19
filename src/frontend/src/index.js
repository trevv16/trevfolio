import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes
} from '@material-ui/core';

let theme = createMuiTheme({
  palette: {
    primary: {
      light: '#687395',
      main: '#3c4867',
      dark: '#11213c'
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#69ff9a',
      main: '#23ce6b',
      dark: '#009c3e'
    },
    success: {
      main: '#229631',
      dark: '#1a7426'
    },
    danger: {
      main: '#f46036',
      dark: '#e93c0c'
    },
    warning: {
      main: '#fbbe4b',
      dark: '#faa80f'
    },
    info: {
      main: '#59a5d8',
      dark: '#2f8ac6'
    },
    gray: {
      light: '#e1e4f1',
      main: '#edf3fd',
      dark: '#bbb7cc'
    },
    light: {
      main: '#edf3fd'
    },
    dark: {
      main: '#061a37'
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2
  },
  typography: {
    fontFamily: '"Poppins", sans-serif',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    h1: {
      fontWeight: 500,
      fontFamily: '"Poppins", sans-serif'
    },
    h2: {
      fontWeight: 500,
      fontFamily: '"Poppins", sans-serif'
    },
    h3: {
      fontWeight: 500,
      fontFamily: '"Poppins", sans-serif'
    },
    h4: {
      fontWeight: 500,
      fontFamily: '"Poppins", sans-serif'
    },
    h5: {
      fontWeight: 500,
      fontFamily: '"Poppins", sans-serif'
    },
    h6: {
      fontWeight: 500,
      fontFamily: '"Poppins", sans-serif'
    },
    body1: {
      fontWeight: 500,
      fontFamily: '"Roboto", sans-serif',
      fontSize: '2rem'
    },
    body2: {
      fontWeight: 500,
      fontFamily: '"Roboto", sans-serif'
    }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': '"Poppins", sans-serif'
      }
    }
  }
});
theme = responsiveFontSizes(theme);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
