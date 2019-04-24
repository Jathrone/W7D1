import * as TodoAPIUtil from '../util/todo_api_util'
export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
import { receiveErrors } from '../actions/error_actions'

export const receiveTodos = (todos) => (
  {
  type: RECEIVE_TODOS,
  todos
  }
);

export const receiveTodo = (todo) => (
  {
    type: RECEIVE_TODO,
    todo
  }
);

export const fetchTodos = () => (dispatch) => {
  return TodoAPIUtil.fetchTodos()
  .then( (res) => dispatch(receiveTodos(res)));
}

export const createTodo = (todo) => (dispatch) => {
  return TodoAPIUtil.createTodo(todo)
  .then( (res) => dispatch(receiveTodo(res)),
  err => dispatch(receiveErrors(err.responseJSON)) );
}


window.createTodo = TodoAPIUtil.createTodo;
window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos;
window.fetchTodos = fetchTodos
