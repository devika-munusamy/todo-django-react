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
import AddIcon from '@mui/icons-material/Add';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import api from "../api";
import "../styles/CreateTask.css"

export default function FormDialog({getTasks}) {
  const [taskName, setTaskName] = useState('')
  const [duedate, setDueDate] = useState()
  const [desc, setDesc] = useState('')
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);
  const [task_type, setType] = useState('once');

  const handleChange = (event) => {
    setType(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const createTask = (e) => {
    console.log('create task')
    e.preventDefault();
    api
        .post("/api/tasks/", { title: taskName, content: desc, done, task_type, duedate })
        .then((res) => {
            console.log('sadasdsadasd', res)
            if (res.status === 201) {
              handleClose();
              getTasks();
            } else {
              alert("Failed to make task.");
            } 
        })
        .catch((err) => alert(err));
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen} className="pull-right" startIcon={<AddIcon />} size="small">
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
          <div>
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
          </div>
          <div className='mt-30px'>
            <TextField
              id="outlined-multiline-static"
              multiline
              rows={2}
              label="Description"
              value={desc}
              fullWidth
              onChange={(event) => setDesc(event.target.value)}
            />
          </div>
          
          <FormLabel id="demo-radio-buttons-group-label" className='mt-50px'>Task type</FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={task_type}
            onChange={handleChange}
            className='text-black pl-30px mb-50px'
          >
            <FormControlLabel value="once" control={<Radio />} label="Once" />
            <FormControlLabel value="daily" control={<Radio />} label="Daily" />
            <FormControlLabel value="weekly" control={<Radio />} label="Weekly" />
            <FormControlLabel value="monthly" control={<Radio />} label="Monthly" />
          </RadioGroup>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DateTimePicker']}>
              <DateTimePicker
                label="Due Date"
                value={duedate}
                format="DD/MM/YYYY"
                onChange={(newDate) => setDueDate(newDate)}
              />
            </DemoContainer>
          </LocalizationProvider>
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
