import React from "react";
import { todoList } from "../Todo.model";
import { BsFillTrashFill } from "react-icons/bs";

export default function Todo({
  todo,
  onUpdate,
  onDelete,
}: {
  todo: todoList;
  onUpdate(updated: todoList): void;
  onDelete(deleted: todoList): void;
}) {
  const { id, text, status } = todo;

  const handleCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...todo, status });
  };

  const handleDelete = () => {
    onDelete(todo);
  };

  return (
    <li className="mx-0 my-0 flex items-center justify-around px-1 py-3">
      <input
        id={id}
        className="ml-8 h-6 w-6"
        type="checkbox"
        checked={status === "completed"}
        onChange={handleCheckChange}
      />
      <label className="ml-2 flex-1 text-2xl" htmlFor={id}>
        {text}
      </label>
      <button
        className="mr-8 h-7 w-7  transition duration-150 ease-out hover:scale-150"
        type="button"
        onClick={handleDelete}
      >
        <BsFillTrashFill />
      </button>
    </li>
  );
}
