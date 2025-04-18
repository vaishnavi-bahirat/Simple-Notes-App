import React, { useState, useEffect } from 'react';

const NoteForm = ({ addOrUpdateNote, editingNote }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setContent(editingNote.content);
    } else {
      setTitle('');
      setContent('');
    }
  }, [editingNote]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return;
    addOrUpdateNote({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <input
          className="form-control"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          rows="3"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        {editingNote ? 'Update' : 'Add'} Note
      </button>
    </form>
  );
};

export default NoteForm;
