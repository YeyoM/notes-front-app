import React, { useState } from 'react'
import Togglabel from './Togglabel'

export default function NoteForm({ addNote }) {

  const [newNote, setNewNote] = useState('')

  const handleChange = (event) => {
    setNewNote(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5,
    }

    addNote(noteObject)
    setNewNote('')
  }

  return (
    <div>
      <Togglabel buttonLable='New Note'>
        <h3>Add a new note</h3>
        <form onSubmit={handleSubmit}>
          <input
            value={newNote}
            onChange={handleChange}
            placeholder="Note..."
          />
          <button type="submit">save</button>
        </form>
      </Togglabel>
    </div>
  )
} 