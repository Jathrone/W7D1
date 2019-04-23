import React from 'react';
import TodoListContainer from "./todos/todo_list_container";
import TodoFormContainer from "./todos/todo_form_container";

export const App = (props) => {
  return (
    <>
      <TodoFormContainer />
      <TodoListContainer />
    </>
  );
}