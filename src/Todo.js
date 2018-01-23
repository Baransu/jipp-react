import React from "react";
import { Provider } from "react-redux";

import type { Filter } from "./reducer";
import store from "./store";
import TodoList from "./TodoList";

const Todo = () => {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
};

export default Todo;
