import { useState, useEffect } from "react";
import api from "../api";
import Task from "../components/Task";
import CreateTask from "../components/CreateTask";
import "../styles/Home.css"

function Home() {
    console.log('asdasd inside home')
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getTasks();
    }, []);

    const getTasks = () => {
        api
            .get("/api/tasks/")
            .then((res) => res.data)
            .then((data) => {
                setTasks(data);
                console.log(data);
            })
            .catch((err) => alert(err));
    };

    const deleteTask = (id) => {
        api
            .delete(`/api/tasks/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) alert("Task deleted!");
                else alert("Failed to delete task.");
                getTasks();
            })
            .catch((error) => alert(error));
    };

    const updateTask = (row) => {
        console.log('update task')
        api
            .put(`/api/tasks/update/${row.id}/`, {...row, done: !row.done})
            .then((res) => {
                alert("Task updated!");
                getTasks();
            })
            .catch((error) => alert(error));
    }

    return (
        <div className="tab-content tab-view p-5">
            <div>
                <div>
                    <h2>Tasks</h2>
                    <CreateTask getTasks={getTasks} />
                </div>
                <table className="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th> # </th>
                            <th> Status </th>
                            <th> Task </th>
                            <th> Desc </th>
                            <th> Task Type </th>
                            <th> Created At </th>
                            <th> ... </th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((task) => (
                            <Task task={task} onDelete={deleteTask} onUpdate={updateTask} key={task.id} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Home;