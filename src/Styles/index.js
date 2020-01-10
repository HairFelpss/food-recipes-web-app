import { createMuiTheme } from '@material-ui/core/styles';
import 'react-toastify/dist/ReactToastify.css'
// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3AAFA9',
    },
    secondary: {
      main: '#2B7A78',
    },
    tertiary: '#17252A',
    quaternary: '#DEF2F1',
    quinary: '#2B7A78',
    danger: '#E1315B',
    edit: '#3AAFA9',
    background: {
      default: '#25262a',
    },
    text: {
      primary: '#DEF2F1',
      secondary: '#25262a',
      tertiary: '#2B7A78',
    },
    transparent: {
      main: 'transparent',
    }
  },
});

export default theme;