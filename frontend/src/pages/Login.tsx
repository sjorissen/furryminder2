import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button, Card, Container, CssBaseline, TextField } from '@mui/material';
import { FormEvent } from 'react';
import urls from '../urls';
import { login } from '../api';

// Playing around with MUI theming
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

// Takes form entries and serializes to an object. { key: "value" }
const serializeForm = (target: HTMLFormElement): Record<string, string> =>
  Object.fromEntries(new FormData(target)) as Record<string, string>;

export default function Login() {
  const onLogin = (event: FormEvent<HTMLFormElement>) => {
    // Default = GET request at current URL. We don't want that.
    event.preventDefault();
    const { email, password } = serializeForm(event.currentTarget);
    // see api.ts
    login({ username: email, password })
      .then(resp => {
        switch (resp.status) {
          case 200:
            console.log('login success');
            break;
          default:
            resp.text().then(console.error);
        }
      })
      .catch(console.error);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Card
          onSubmit={onLogin}
          component="form"
          raised={true}
          sx={{
            m: 1,
            p: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: 8,
          }}>
          <TextField
            variant="outlined"
            id="email"
            label="Email Address"
            name="email"
            margin="normal"
            required
            autoFocus
          />
          <TextField
            variant="outlined"
            id="pasword"
            label="Password"
            name="password"
            margin="normal"
            required
          />
          <Button type="submit" variant="contained">
            Login
          </Button>
        </Card>
      </Container>
    </ThemeProvider>
  );
}
