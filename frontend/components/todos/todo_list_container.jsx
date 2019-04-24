import { TodoListIndex } from './todo_list';
import { connect } from 'react-redux';
import { allTodos } from '../../reducers/selectors';


const mapStateToProps = (state) => {
  return {
    todos: allTodos(state),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    receiveTodo: (todo) => dispatch(receiveTodo(todo)),
    fetchTodos: () => dispatch(fetchTodos())
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListIndex);