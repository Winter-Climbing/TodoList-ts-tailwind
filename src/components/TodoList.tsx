import React, { useEffect, useState } from "react";

import AddTodo from "./AddTodo";
import Todo from "./Todo";

import { todoList } from "../Todo.model";

export default function TodoList({ filter }: { filter: string }) {
  const [todos, setTodos] = useState<todoList[]>(readFromLocalStorageTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (todo: todoList): void => {
    setTodos([...todos, todo]);
  };

  const handleUpdateTodo = (updated: todoList): any => {
    setTodos(todos.map((todo) => (todo.id === updated.id ? updated : todo)));
  };

  const handleDeleteTodo = (deleted: todoList): any => {
    setTodos(todos.filter((todo) => todo.id !== deleted.id));
  };

  const filteredList = getTodoStatus(todos, filter);

  return (
    <section className="flex h-full min-h-0 w-full flex-col justify-between ">
      <ul className="flex flex-col overflow-y-auto">
        {filteredList.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onUpdate={handleUpdateTodo}
            onDelete={handleDeleteTodo}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAddTodo} />
    </section>
  );
}

const readFromLocalStorageTodo = () => {
  const todo = localStorage.getItem("todos");
  return todo ? JSON.parse(todo) : null;
};

const getTodoStatus = (todos: todoList[], filter: string) => {
  if (filter === "all") return todos;
  return todos.filter((todo) => todo.status === filter);
};
