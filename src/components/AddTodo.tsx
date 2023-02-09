import React, { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { todoList } from "../Todo.model";

const AddTodo = ({ onAdd }: { onAdd(todo: todoList): void }) => {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmitTodo = (e: React.ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (value.trim().length === 0) return;
    onAdd({ id: uuidv4(), text: value, status: "active" });
    setValue("");
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const handleChangeTodo = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmitTodo}>
      <input
        type="text"
        value={value}
        onChange={handleChangeTodo}
        ref={inputRef}
      />
      <button type="button">Add</button>
    </form>
  );
};

export default AddTodo;
