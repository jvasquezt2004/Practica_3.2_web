import { useState } from "react";

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <>
      <section className="min-h-screen bg-gray-50 flex items-center justify-center p-5">
        <div className="bg-white p-7 rounded-xl shadow-lg w-full max-w-sm">
          <h1 className="text-xl font-bold mb-5">Crear Tarea</h1>
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
          <ul className="mt-5 space-y-4">
            {tasks.map((task, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-gray-100 p-2 rounded-md shadow-sm"
              >
                <span>{task}</span>
                <button
                  className="bg-red-500 text-white p-1 rounded-xl hover:bg-red-700 transition"
                  onClick={() => handleDeleteTask(index)}
                >
                  Borrar Tarea
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
