import { useEffect } from "react";
import { AddTask } from "./AddTask";
import { Stats } from "./Stats";
import { TaskList } from "./TaskList";
import { useState } from "react";
import axios from "axios";

export const Dashboard = () => {
  const handleDelete = (id) => {
    setTasks(tasks.filter((x) => x.id !== id));
  };

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (updatedTask) => {
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3004/tasks").then((response) => {
      setTasks(response.data);
    });
  }, []);

  return (
    <div className="dashboard">
      <div className="row">
        <TaskList tasks={tasks} onDelete={handleDelete} onUpdate={updateTask} />
        <AddTask onAdd={addTask} />
      </div>
      <Stats tasks={tasks} />
    </div>
  );
};
