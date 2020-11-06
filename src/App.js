import React, { Component } from "react"
import AddNotes from "./components/AddNotes"
import Notes from "./components/Notes"

class App extends Component {
  state = {
    notes: [
      { id: 1, content: "Reading Book" },
      { id: 2, content: "Codding" },
    ],
  }

  addNote = (note) => {
    note.id = Math.random()
    let notes = [...this.state.notes, note]
    this.setState({ notes })
  }

  deleteNote = (id) => {
    const notes = this.state.notes.filter((note) => note.id !== id)
    this.setState({ notes })
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
        <Notes notes={this.state.notes} deleteNote={this.deleteNote} />
        <AddNotes addNote={this.addNote} />
      </div>
    )
  }
}

export default App
