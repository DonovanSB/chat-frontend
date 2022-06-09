import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import MasterLayout from 'components/layouts/MasterLayout/MasterLayout';

// @INFO Redux
import { Provider } from 'react-redux';
import store from './redux/store';

const customTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#fd531e',
    },
    secondary: {
      main: '#fd531e',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <div className="App">
        <Provider store={store}>
          <MasterLayout />
        </Provider>
      </div>
    </ThemeProvider>
  );
}

export default App;
