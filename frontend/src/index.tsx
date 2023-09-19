import React, { MouseEventHandler } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, Outlet, RouterProvider, useNavigate } from 'react-router-dom';
import Login from './pages/Login';
import urls from './urls';
import {
  AppBar,
  Button,
  ButtonBase,
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
import '@fontsource/quicksand';
import PetView from './components/PetView';
import TaskList from './components/TaskList';

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
    <Button variant="contained" color="secondary" onClick={onLogout}>
      Log Out
    </Button>
  );
}

function Root() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: 'flex-end' }}>
          <Typography variant="h4" sx={{ flex: 1, textAlign: 'center' }}>
            FurryMinder
          </Typography>
          <Logout />
        </Toolbar>
      </AppBar>
      <Grid container spacing={10} sx={{ px: 15, py: 5 }}>
        <Grid item xs={5}>
          <Box>
            <TaskList />
          </Box>
        </Grid>
        <Grid item xs={7}>
          <PetView />
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
