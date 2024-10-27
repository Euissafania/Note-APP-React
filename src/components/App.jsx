import React, { useState } from 'react';
import NoteHeader from './NoteHeader';
import NoteBody from './NoteBody';
import { getInitialData } from "../utils";

function App() {
  const [notes, setNotes] = useState(getInitialData());
  const [searchQuery, setSearchQuery] = useState(''); // State untuk query pencarian

  // Filter notes berdasarkan searchQuery
  const filteredNotes = notes.filter(note => 
    note.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    note.body.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="note-app">
      <NoteHeader setSearchQuery={setSearchQuery} /> 
      <NoteBody
        notes={filteredNotes}
        setNotes={setNotes}
      />
    </div>
  );
}

export default App;
