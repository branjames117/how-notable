const router = require('express').Router();
const { createNewNote, deleteNote, getNotes } = require('../../lib/notes');

// set routes for interacting with the api (a simple backend json database)

// GET current notes

router.get('/notes', (req, res) => {
  res.json(getNotes());
});

// POST new note

router.post('/notes', (req, res) => {
  const note = createNewNote(req.body, getNotes());
  res.json(note);
});

// DELETE note by UUID

router.delete('/notes/:id', (req, res) => {
  const id = req.params.id;
  deleteNote(id, getNotes());
  res.json(id);
});

module.exports = router;
