
export const fetchTodos = () => {
  return $.ajax({
    method: "get",
    url: "/api/tasks"
  })
}

export const createTodo = (todo) => {
  return $.ajax({
    method: "post",
    url: "/api/tasks",
    data: {todo: todo}
  })
}

