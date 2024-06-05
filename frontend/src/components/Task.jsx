import React from "react";
import "../styles/Task.css"
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';

function Task({ task, onDelete, onUpdate }) {
    const formattedDate = (date) => new Date(date).toLocaleDateString();

    return (
        <tr >
            <td> {task.id} </td>
            <td>
                <Checkbox checked={task.done} onChange={() => onUpdate(task)} />
            </td>
            <td className="task-title">{task.title}</td>
            <td className="task-content">{task.content}</td>
            <td className="task-content">{task.task_type}</td>
            <td className="task-date">{formattedDate(task.created_at)}</td>
            <td className="task-date">{formattedDate(task.duedate)}</td>
            <td>
                <Button color="error" variant="contained" onClick={() => onDelete(task.id)} startIcon={<DeleteIcon />}  size="small">
                    Delete
                </Button>
            </td>
        </tr>
    );
}

export default Task