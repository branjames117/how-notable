const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const { createNewNote, deleteNote } = require('../../lib/notes');

router.get('/notes', (req, res) => {
  let notes = fs.readFileSync(path.join(__dirname, '../../db/db.json'));
  let parsedNotes = JSON.parse(notes);
  console.log(parsedNotes);
  res.json(parsedNotes);
});

router.post('/notes', (req, res) => {
  let notes = fs.readFileSync(path.join(__dirname, '../../db/db.json'));
  let parsedNotes = JSON.parse(notes);
  const note = createNewNote(req.body, parsedNotes);
  res.json(note);
});

router.delete('/notes/:id', (req, res) => {
  let notes = fs.readFileSync(path.join(__dirname, '../../db/db.json'));
  let parsedNotes = JSON.parse(notes);
  const id = req.params.id;
  deleteNote(id, parsedNotes);
  res.json();
});

module.exports = router;
