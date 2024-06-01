import React from "react";
import "../styles/Task.css"

function Task({ task, onDelete }) {
    const formattedDate = new Date(task.created_at).toLocaleDateString("en-US")

    return (
        <tr >
            <td> {task.id} </td>
            <td className="task-title">{task.title}</td>
            <td className="task-content">{task.content}</td>
            <td className="task-date">{formattedDate}</td>
            <td>
                <button className="delete-button" onClick={() => onDelete(task.id)}>
                    Delete
                </button>
            </td>
        </tr>
    );
}

export default Task