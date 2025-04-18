import React from 'react';

const NoteItem = ({ note, deleteNote, startEditing }) => {
  return (
    <div className="card note">
      <div className="card-body">
        <h5 className="card-title">{note.title}</h5>
        <p className="card-text">{note.content}</p>
        <small>{new Date(note.createdAt).toLocaleString()}</small>
        <div className="d-flex justify-content-end">
  <button className="btn btn-sm btn-secondary me-2" onClick={() => startEditing(note)}>Edit</button>
  <button className="btn btn-sm btn-danger" onClick={() => deleteNote(note._id)}>Delete</button>
</div>
      </div>
    </div>
  );
};

export default NoteItem;
