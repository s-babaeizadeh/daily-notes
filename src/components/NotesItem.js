import React from "react"

const NotesItem = ({ note, deleteNote }) => {
  return (
    <div className="collection-item">
      <span onClick={() => deleteNote(note.id)}>{note.content}</span>
    </div>
  )
}

export default NotesItem
