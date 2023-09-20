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
import { ArrowBack, ArrowForward, ExpandLess, ExpandMore, Edit } from '@mui/icons-material';
import EditTask from './EditTask';

/**
 * Task list component for main page. Displays a list of tasks due for the selected
 * date. Defaults to current date, but can move forward or backwards by a day with the
 * arrows buttons. (Later: add the ability to select a specific date.)
 * Task can be checked off when completed. User can also add a new task or open a form
 * to edit an existing task.
 */
export default function TaskList() {
  // Handles checkboxes for each task
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
      {/* Displays date for tasks & arrows to move between dates */}
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
      {/* Create some temp list items */}
      {[0, 1, 2, 3].map(value => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem
            key={value}
            secondaryAction={<EditTask />}
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
