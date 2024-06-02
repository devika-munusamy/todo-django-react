import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import "../styles/CreateTask.css"

export default function FormDialog() {
  const [taskName, setTaskName] = useState('')
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);
  const [type, setType] = useState('once');

  const handleChange = (event) => {
    setType(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const createTask = () => {
    console.log('createTask called', taskName, type, done)
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} className="pull-right">
        Open form dialog
      </Button>
      <Dialog
        maxWidth="sm"
        fullWidth
        open={open}
        onClose={handleClose}
      >
        <DialogTitle> Create Task </DialogTitle>
        <DialogContent className='text-black'>
          <TextField
            autoFocus
            required
            id="task"
            value={taskName}
            onChange={(event) => setTaskName(event.target.value)}
            label="Task Name"
            type="text"
            fullWidth
            variant="outlined"
          />
          <FormLabel id="demo-radio-buttons-group-label" className='mt-50px'>Task type</FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={type}
            onChange={handleChange}
            className='text-black pl-30px mb-50px'
          >
            <FormControlLabel value="once" control={<Radio />} label="Once" />
            <FormControlLabel value="daily" control={<Radio />} label="Daily" />
            <FormControlLabel value="weekly" control={<Radio />} label="Weekly" />
            <FormControlLabel value="monthly" control={<Radio />} label="Monthly" />
          </RadioGroup>
          <FormLabel component="legend">Task Status</FormLabel>
          <FormControlLabel className='pl-30px' control={<Checkbox
            checked={done}
            onChange={(event) => setDone(event.target.checked)}
            />} label="Done" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant='outlined' color='error'>Cancel</Button>
          <Button onClick={createTask} variant='contained'>Create Task</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
