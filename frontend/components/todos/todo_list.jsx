import React from 'react';

const TodoListItem = ({todo}) => {
  return <li>{todo.title}</li>
};

export const TodoListIndex = ({receiveTodo, todos}) => {
  return (
  <ul>
    {todos.map((todo) => (
      <TodoListItem key={todo.id} todo={todo} />
    ))}
  </ul>
    ); 
}