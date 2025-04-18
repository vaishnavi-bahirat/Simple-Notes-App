import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NoteForm from './components/NoteForm';
import NotesList from './components/NotesList';
import './App.css';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);

  const fetchNotes = async () => {
    const res = await axios.get('http://localhost:5000/notes');
    setNotes(res.data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const addOrUpdateNote = async (note) => {
    if (editingNote) {
      const res = await axios.put(`http://localhost:5000/notes/${editingNote._id}`, note);
      setNotes(notes.map(n => n._id === editingNote._id ? res.data : n));
      setEditingNote(null);
    } else {
      const res = await axios.post('http://localhost:5000/notes', note);
      setNotes([res.data, ...notes]);
    }
  };

  const deleteNote = async (id) => {
    await axios.delete(`http://localhost:5000/notes/${id}`);
    setNotes(notes.filter(n => n._id !== id));
  };

  const startEditing = (note) => {
    setEditingNote(note);
  };

  return (
    <div className="container">
      <h1>Notes App</h1>
      <NoteForm addOrUpdateNote={addOrUpdateNote} editingNote={editingNote} />
      <NotesList notes={notes} deleteNote={deleteNote} startEditing={startEditing} />
    </div>
  );
};

export default App;
