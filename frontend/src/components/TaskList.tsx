import React from 'react';
import {
  Checkbox,
  Collapse,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography,
} from '@mui/material';
import { ArrowBack, ArrowForward, ExpandLess, ExpandMore } from '@mui/icons-material';

export default function TaskList() {
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List>
      <ListSubheader
        sx={{
          bgcolor: 'primary.main',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <IconButton variant="contained">
          <ArrowBack />
        </IconButton>
        <Typography>2/12/94</Typography>
        <IconButton variant="contained">
          <ArrowForward />
        </IconButton>
      </ListSubheader>
      {[0, 1, 2, 3].map(value => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem
            key={value}
            secondaryAction={
              <IconButton edge="end" aria-label="comments">
                X
              </IconButton>
            }
            disablePadding
            sx={{ bgcolor: 'background.paper' }}>
            <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
