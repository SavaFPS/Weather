import { NavBar } from './components/NavBar';
import { Grid, CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { PublicRoutes } from './routes/PublicRoutes';
import { Header } from './components/Header';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme/Theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <BrowserRouter>
          <Grid container sx={{ padding: { xs: '5px', lg: '20px' } }}>
            <Grid item sx={{ display: { xs: 'none', lg: 'grid' } }}>
              <NavBar />
            </Grid>
            <Grid item xs={12} sx={{ display: { xs: 'grid', lg: 'none' } }}>
              <Header />
            </Grid>
            <Grid item px="1rem" xs={12} lg={11}>
              <PublicRoutes />
            </Grid>
          </Grid>
        </BrowserRouter>
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;
