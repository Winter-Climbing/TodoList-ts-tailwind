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
    <li>
      <input
        id={id}
        type="checkbox"
        checked={status === "completed"}
        onChange={handleCheckChange}
      />
      <label htmlFor={id}>{text}</label>
      <button type="button" onClick={handleDelete}>
        <BsFillTrashFill />
      </button>
    </li>
  );
}
