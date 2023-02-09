import React, { useState } from "react";
import TodoList from "./components/TodoList";
import Header from "./components/Header";

const filters: string[] = ["all", "completed", "active"];

function App() {
  const [filter, setFilter] = useState<string>(filters[0]);

  return (
    <main className="  flex h-full w-full flex-col items-center justify-between text-center">
      <Header filter={filter} filters={filters} onChangeFilter={setFilter} />
      <TodoList filter={filter} />
    </main>
  );
}

export default App;
