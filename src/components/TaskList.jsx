import React from "react";

export default function TaskList({ tasks, onDeleteTask }) {
  return (
    <ul className="mt-5 space-y-4">
      {tasks.map((task, index) => (
        <li
          key={index}
          className="flex justify-between items-center bg-gray-100 p-2 rounded-md shadow-sm"
        >
          <span>{task}</span>
          <button
            className="bg-red-500 text-white p-1 rounded-xl hover:bg-red-700 transition"
            onClick={() => onDeleteTask(index)}
          >
            Borrar Tarea
          </button>
        </li>
      ))}
    </ul>
  );
}
