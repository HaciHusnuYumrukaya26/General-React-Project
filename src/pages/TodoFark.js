import React, { useState } from "react";

import TodoField from "../componentTodoFarkli/TodoField";
import Todos from "../componentTodoFarkli/Todos";


function TodoFark() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      name: "Alışveriş",
      status: false,
    },
    {
      id: 2,
      name: "gym",
      status: true,
    },
  ]);

  const addTodo = (todo) => {
    if (todo.name) {
      setTodos([...todos, todo]);
    }
  };

  const deleteTodo = (id) => {
    let newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const doneTodo = (id) => {
    let currentTodo = todos.find((todo) => todo.id === id);
    currentTodo.status = true;
    setTodos([...todos]);
  };

  return (
    <div className="app">
      <h1>todos</h1>
      <TodoField addTodo={addTodo} />
      <Todos doneTodo={doneTodo} deleteTodo={deleteTodo} todos={todos} />
    </div>
  );
}

export default TodoFark;