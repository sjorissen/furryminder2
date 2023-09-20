import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  IconButton,
} from '@mui/material';
import React, { ReactNode } from 'react';
import { Edit } from '@mui/icons-material';
import { DatePicker } from '@mui/x-date-pickers';

/**
 * Button that opens a form dialog to edit the selected task.
 * Fields include task's title, description, and due date. Fields will default to the
 * task's current information when opened.
 * (May expand to allow tasks to be set over a date range and to repeat.)
 */
export default function EditTask() {
  // Handles opening & closing the edit form
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* Edit icon button appears on task list next to each task */}
      <IconButton edge="end" aria-label="edit" onClick={handleClickOpen}>
        <Edit />
      </IconButton>
      {/* Edit task form */}
      <Dialog open={open} onClose={handleClose} aria-labelledby="edit-apartment">
        <DialogTitle id="edit-task">Edit Task</DialogTitle>
        <DialogContent>
          <TextField autoFocus margin="dense" id="title" label="Title" type="text" fullWidth />
          <TextField autoFocus margin="dense" id="desc" label="Description" type="text" fullWidth />
          <DatePicker label="Due Date" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" variant="contained">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary" variant="contained">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
