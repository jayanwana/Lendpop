import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#343436'
    },
    primary: {
      main: '#00a218'
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
