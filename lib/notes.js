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

module.exports = createNewNote;
