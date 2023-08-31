import React, { MouseEventHandler } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, Outlet, RouterProvider, useNavigate } from 'react-router-dom';
import Login from './pages/Login';
import urls from './urls';
import {
  AppBar,
  Button,
  Container,
  CssBaseline,
  Grid,
  Paper,
  Toolbar,
  Typography,
} from '@mui/material';
import { post } from './api';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import 'nes.css/css/nes.min.css';
import '@fontsource/press-start-2p';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#68B3AF',
    },
    secondary: {
      main: '#fba2a2',
    },
    background: {
      default: '#d2dcb2',
      paper: '#eff7e0',
    },
    error: {
      main: '#FFC3C6',
    },
  },
  typography: {
    fontFamily: 'Quicksand',
  },
});

const petView = createTheme({
  typography: {
    petName: {
      fontFamily: "'Press Start 2P'",
      fontSize: 30,
    },
  },
});

function Logout() {
  const navigate = useNavigate();
  const onLogout = event => {
    event.preventDefault();
    post(urls.api.logout)
      .then(resp => {
        switch (resp.status) {
          case 200:
            navigate(urls.home);
            break;
          default:
            resp.text().then(console.error);
        }
      })
      .catch(console.error);
  };

  return (
    <Button variant="contained" onClick={onLogout}>
      Log Out
    </Button>
  );
}

function Root() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" color="primary">
        <Toolbar sx={{ justifyContent: 'flex-end' }}>
          <Typography variant="h4" sx={{ flex: 1, textAlign: 'center' }}>
            FurryMinder
          </Typography>
          <Logout />
        </Toolbar>
      </AppBar>
      <Grid container spacing={10} sx={{ px: 15, py: 5 }}>
        <Grid item xs={5}>
          <Box sx={{ border: '1px solid black' }}>Tasks go here</Box>
        </Grid>
        <Grid item xs={7}>
          <ThemeProvider theme={petView}>
            <Box
              className="nes-container is-rounded"
              sx={{
                border: '1px solid black',
                display: 'grid',
                gridAutoColumns: '1fr',
                justifyContent: 'center',
                textAlign: 'center',
              }}>
              <Typography variant="petName">Pet Name</Typography>
              <progress className="nes-progress is-primary" value="90" max="100" />
            </Box>
          </ThemeProvider>
        </Grid>
      </Grid>
      {/*<Outlet />*/}
    </ThemeProvider>
  );
}

const router = createBrowserRouter([
  {
    path: urls.login,
    element: <Login />,
  },
  {
    path: urls.home,
    element: <Root />,
    children: [{ path: 'logout', element: <h1>logout</h1> }],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
