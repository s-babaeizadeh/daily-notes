import React from "react"

const TodoItem = ({ todo, deleteTodo }) => {
  return (
    <div className="collection-item">
      <span onClick={() => deleteTodo(todo.id)}>{todo.content}</span>
    </div>
  )
}

export default TodoItem
