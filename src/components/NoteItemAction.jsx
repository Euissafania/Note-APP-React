import React from "react";

function NoteItemAction({ onDeleteNote, onArchiveNote, id, archived }) {
  return (
    <div className="note-item__action">
      <button
        onClick={() => onDeleteNote(id)}
        aria-label="Delete Button"
        className="note-item__delete-button"
      >
        Delete
      </button>
      <button
        onClick={() => onArchiveNote(id)}
        aria-label="Archive Button"
        className="note-item__archive-button"
      >
        {archived ? "Unarchive" : "Archive"}
      </button>
    </div>
  );
}

export default NoteItemAction;
