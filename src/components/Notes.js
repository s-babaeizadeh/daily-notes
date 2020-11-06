import React from "react"
import NotesItem from "./NotesItem"

const Notes = ({ notes, deleteNote }) => {
  const noteList = notes.length ? (
    notes.map((note) => (
      <NotesItem key={note.id} note={note} deleteNote={deleteNote} />
    ))
  ) : (
    <p className="center">There is no note</p>
  )
  return (
    <div className="todos collection" style={{ borderRadius: "8px" }}>
      {noteList}
    </div>
  )
}

export default Notes
