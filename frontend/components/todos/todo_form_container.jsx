import { connect } from "react-redux";
import TodoForm from "./todo_form";
import { receiveTodo, createTodo } from "../../actions/todo_actions";
import { clearErrors } from "../../actions/error_actions"; 

const mapStateToProps = (state) => {
  return {
    errors: state.errors
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    receiveTodo: (todo) => dispatch(receiveTodo(todo)),
    createTodo: (todo) => dispatch(createTodo(todo)),
    clearErrors: () => dispatch(clearErrors)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm); 



