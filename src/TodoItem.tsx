import { Trash } from "lucide-react";

type priorite = "Urgente" | "Moyenne" | "Basse";

type Todo = {
  id: number;
  text: string;
  priority: priorite;
};

type Props = {
  todo: Todo;
};

const TodoItem = ({ todo }: Props) => {
  return (
    <li className="p-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            className="checkbox checkbox-primary checkbox-sm"
          />
          <span className="text-md font-bold">
            <span>{todo.text}</span>
          </span>
          <span
            className={`badge badge-sm badge-soft ${
              todo.priority === "Urgente"
                ? "badge-error"
                : todo.priority === "Moyenne"
                ? "badge-warning"
                : "badge-success"
            }`}
          >
            {todo.priority}
          </span>
        </div>
        <div className="flex gap-2">
          <button className="btn btn-sm btn-error btn-circle btn-soft">
            <Trash className="w-4 h-4" />
          </button>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
