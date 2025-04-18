import React from 'react';
import NoteItem from './NoteItem';

const NotesList = ({ notes, deleteNote, startEditing }) => {
  return (
    <div>
      {notes.map(note => (
        <NoteItem key={note._id} note={note} deleteNote={deleteNote} startEditing={startEditing} />
      ))}
    </div>
  );
};

export default NotesList;
