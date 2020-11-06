import React from "react"
import TodoItem from "./TodoItem"

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
    ))
  ) : (
    <p className="center">There is no note</p>
  )
  return (
    <div className="todos collection" style={{ borderRadius: "8px" }}>
      {todoList}
    </div>
  )
}

export default Todos
