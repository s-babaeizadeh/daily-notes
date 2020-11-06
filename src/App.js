import React, { Component } from "react"
import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "Reading Book" },
      { id: 2, content: "Codding" },
    ],
  }

  addTodo = (todo) => {
    todo.id = Math.random()
    let todos = [...this.state.todos, todo]
    this.setState({ todos })
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => todo.id !== id)
    this.setState({ todos })
  }
  render() {
    return (
      <div className="todo-app container">
        <h1
          className="center teal lighten-1"
          style={{ color: "white", borderRadius: "5px" }}
        >
          Daily Notes
        </h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    )
  }
}

export default App
