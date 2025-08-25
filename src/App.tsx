import { useEffect, useState } from "react";

type priorite = "Urgente" | "Moyenne" | "Basse";

type Todo = {
  id: number;
  text: string;
  priority: priorite;
};

function App() {
  const [input, setInput] = useState<string>("");
  const [priorite, setPriority] = useState<priorite>("Moyenne");
  const savedTodos = localStorage.getItem("todos");
  const initialTodos = savedTodos ? JSON.parse(savedTodos) : [];
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<priorite | "Tous">("Tous");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function addToDo() {
    if (input.trim() == "") {
      return;
    }

    const newTodo: Todo = {
      id: Date.now(),
      text: input.trim(),
      priority: priorite,
    };

    const newTodos = [newTodo, ...todos];
    setTodos(newTodos);
    setInput("");
    setPriority("Moyenne");
    console.log(newTodos);
  }

  let filteredTodos: Todo[] = [];

  return (
    <div className="flex justify-center">
      <div className="w-2/3 flex flex-col gap-4 my-15 bg-base-300 p-5 rounded-2xl">
        <div className="flex gap-4">
          <input
            type="text"
            className="input w-full"
            placeholder="Ajouter une tâche..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <select
            className="select w-full"
            value={priorite}
            onChange={(e) => setPriority(e.target.value as priorite)}
          >
            <option value="Urgente">Urgente</option>
            <option value="Moyenne">Moyenne</option>
            <option value="Basse">Basse</option>
          </select>
          <button onClick={addToDo} className="btn btn-primary">
            Ajouter
          </button>
        </div>
        <div className="space-y-2 flex-1 h-fit">
          <div className="flex flex-wrap gap-4">
            <button
              className={`btn btn-soft ${
                filter === "Tous" ? "btn-primary" : ""
              }`}
              onClick={() => setFilter("Tous")}
            >
              Tous
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
