import { useState, useEffect } from "react";
import api from "../api";
import Task from "../components/Task";
import CreateTask from "../components/CreateTask";
import "../styles/Home.css"

function Home() {
    console.log('asdasd inside home')
    const [tasks, setTasks] = useState([]);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");

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

    const createTask = (e) => {
        console.log('create task')
        e.preventDefault();
        api
            .post("/api/tasks/", { content, title })
            .then((res) => {
                console.log('sadasdsadasd', res)
                if (res.status === 201) alert("Task created!");
                else alert("Failed to make task.");
                getTasks();
            })
            .catch((err) => alert(err));
    };

    return (
        <div className="tab-content tab-view">
            <div>
                <div>
                    <h2>Tasks</h2>
                    <CreateTask />
                </div>
                <table className="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th> # </th>
                            <th> Task </th>
                            <th> Desc </th>
                            <th> Created At </th>
                            <th> ... </th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((task) => (
                            <Task task={task} onDelete={deleteTask} key={task.id} />
                        ))}
                    </tbody>
                </table>
                
            </div>
            <h2>Create a Task</h2>
            <form onSubmit={createTask}>
                <label htmlFor="title">Title:</label>
                <br />
                <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <label htmlFor="content">Content:</label>
                <br />
                <textarea
                    id="content"
                    name="content"
                    required
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
                <br />
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    );
}

export default Home;