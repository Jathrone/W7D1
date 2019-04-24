import React from 'react';

const TodoListItem = ({todo}) => {
  return <li>{todo.title}</li>
};

export class TodoListIndex extends React.Component {
  
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.props.fetchTodos()
  }
  
  render () {
    return (
    <ul>
      {this.props.todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </ul>
      ); 
  }

}