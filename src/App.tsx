import { useState } from "react";

type priorite = "Urgente" | "Moyenne" | "Basse";

type Todo = {
  id: number;
  text: string;
  priority: priorite;
};

function App() {
  const [input, setInput] = useState<string>("");
  const [priority, setPriority] = useState<string>("Moyenne");
  return (
    <div className="flex justify-center">
      <div className="w-2/3 flex flex-col gap-4 my-15 bg-base-300 p-5 rounded-2xl">
        <div className="flex gap-4">
          <input
            type="text"
            className="input w-full"
            placeholder="Ajouter une tâche..."
            value={input}
          />
          <select className="select w-full" value={priority}>
            <option value="Urgente">Urgente</option>
            <option value="Moyenne">Moyenne</option>
            <option value="Basse">Basse</option>
          </select>
          <button className="btn btn-primary">Ajouter</button>
        </div>
      </div>
    </div>
  );
}

export default App;
