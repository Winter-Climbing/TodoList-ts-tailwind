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
    <form
      className="flex w-full bg-gray-100 px-6 py-4"
      onSubmit={handleSubmitTodo}
    >
      <input
        className="flex-1 rounded-b-lg rounded-t-lg border-none px-3 py-4 text-2xl outline-none"
        type="text"
        value={value}
        onChange={handleChangeTodo}
        ref={inputRef}
        placeholder="입력하세요"
      />
      <button
        className="cursor-pointer rounded-r-lg  bg-blue-500 py-3 px-8 text-2xl font-bold text-white"
        type="button"
      >
        Add
      </button>
    </form>
  );
};

export default AddTodo;
