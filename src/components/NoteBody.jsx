import React from "react";
import NoteList from "./NoteList";
import NoteInput from "./NoteInput";

function NoteBody({ notes, setNotes }) {
  // Pisahkan catatan yang diarsipkan dan yang tidak
  const activeNotes = notes.filter(note => !note.archived);
  const archivedNotes = notes.filter(note => note.archived);

  return (
    <div className="note-app__body">
      <NoteInput setNotes={setNotes} />
      <NoteList label="All Notes" setNotes={setNotes} notes={activeNotes} />
      <NoteList label="Archived Notes" setNotes={setNotes} notes={archivedNotes} />
    </div>
  );
}

export default NoteBody;
