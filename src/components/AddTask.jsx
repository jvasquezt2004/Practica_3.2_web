import React, { useState } from "react";

export default function AddTask({ onAddTask }) {
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    if (task.trim() !== "") {
      onAddTask(task);
      setTask("");
    }
  };

  return (
    <div className="flex flex-col space-y-4">
      <input
        type="text"
        className="border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
        placeholder="Ingrese su tarea"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        className="bg-teal-500 text-white p-3 rounded-xl mt-5 hover:bg-teal-700 transition"
        onClick={handleAddTask}
      >
        Agregar tarea
      </button>
    </div>
  );
}
