import React, { useState } from "react";
import TodoList from "./components/TodoList";
import Header from "./components/Header";

const filters: string[] = ["all", "completed", "active"];

function App() {
  const [filter, setFilter] = useState<string>(filters[0]);

  return (
    <>
      <Header filters={filters} onChangeFilter={setFilter} />
      <TodoList filter={filter} />
    </>
  );
}

export default App;
