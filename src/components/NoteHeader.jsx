import React from "react";

function NoteHeader({ setSearchQuery }) {
  const onSearchChangeHandler = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <input 
        type="search" 
        placeholder="Search Note.." 
        onChange={onSearchChangeHandler} 
      />
    </div>
  );
}

export default NoteHeader;
