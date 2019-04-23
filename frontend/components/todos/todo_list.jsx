import React from 'react';

const TodoListItem = (todo) => {return <li>{todo.id}</li>};

export const TodoListIndex = ({receiveTodo, todos}) => {
  return (
  <ul>
    {todos.map((todo) => (
      <TodoListItem todo={todo} />
    ))}
  </ul>
    ); 
}