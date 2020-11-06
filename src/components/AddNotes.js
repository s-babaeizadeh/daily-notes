import React, { Component } from "react"

class AddNotes extends Component {
  state = {
    content: "",
  }

  handleChange = (e) => {
    this.setState({ content: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (!this.state.content) return
    this.props.addNote(this.state)
    this.setState({ content: "" })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">Add Notes</label>
          <input
            type="text"
            value={this.state.content}
            onChange={this.handleChange}
          />
        </form>
      </div>
    )
  }
}

export default AddNotes
