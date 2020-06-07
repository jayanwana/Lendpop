import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#1ac4c4'
    },
    primary: {
      main: '#83d2d9'
    }
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '"Palanquin"',
      'sans-serif'
    ].join(',')
  }
});

export default theme;
