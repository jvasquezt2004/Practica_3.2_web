import React, { useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center p-5">
      <div className="bg-white p-7 rounded-xl shadow-lg w-full max-w-sm">
        <h1 className="text-xl font-bold mb-5">Crear Tarea</h1>
        <AddTask onAddTask={handleAddTask} />
        <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />
      </div>
    </section>
  );
}

