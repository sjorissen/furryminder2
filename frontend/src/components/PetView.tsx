import { Button, Grid, Paper, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import pika from '../pkmnyellowpika.gif';
import { Checkroom } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';

const petView = createTheme({
  palette: {
    primary: {
      main: '#68B3AF',
    },
    secondary: {
      main: '#fba2a2',
    },
    background: {
      default: '#eff7e0',
      paper: '#eff7e0',
    },
  },
  typography: {
    petFont: {
      fontFamily: "'Press Start 2P'",
      fontSize: 30,
    },
  },
});

export default function PetView() {
  return (
    <ThemeProvider theme={petView}>
      <Paper>
        <Box className="nes-container is-rounded">
          <Grid container direction="column" justifyContent="center" alignItems="center" gap={5}>
            <Typography variant="petFont">Pet Name</Typography>
            <img src={pika} />
            <Grid container item direction="row" justifyContent="space-around" alignItems="center">
              <Grid item xs={1}>
                <Typography variant="petFont">HP:</Typography>
              </Grid>
              <Grid item xs={6}>
                <progress className="nes-progress" value="50" max="100" />
                {/*<LinearProgress variant="determinate" />*/}
              </Grid>
              <Grid item xs={1}>
                <button type="button" className="nes-btn" color="secondary">
                  <Checkroom />
                </button>
              </Grid>
              <Button variant="contained" color="secondary">
                X
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </ThemeProvider>
  );
}
