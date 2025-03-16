import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import Home from './pages/Home';
import Header from './components/Header';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#1976d2',
      },
      secondary: {
        main: '#ff4081',
      },
    },
    typography: {
      h6: {
        fontWeight: 500,
      },
      h5: {
        fontWeight: 700,
      },
      h4: {
        fontWeight: 700,
      },
    },
  });

  return (<>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Home />
    </ThemeProvider>
  </>
  );
}

export default App;
