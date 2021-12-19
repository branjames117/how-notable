const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

// function to rewrite the notes db with the new note added
function createNewNote(note, notes) {
  // validate proper data entry
  if (
    note.title &&
    note.title.length > 0 &&
    note.text &&
    note.text.length > 0
  ) {
    // add a uuid to the note
    note.id = uuidv4();
    notes.push(note);

    fs.writeFileSync(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify(notes),
      null,
      2
    );
  }
}

function deleteNote(id, notes) {
  const newNotes = notes.filter((note) => note.id != id);

  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify(newNotes),
    null,
    2
  );
}

function getNotes() {
  let notes = fs.readFileSync(path.join(__dirname, '../db/db.json'));
  let parsedNotes = JSON.parse(notes);
  return parsedNotes;
}

module.exports = { createNewNote, deleteNote, getNotes };
