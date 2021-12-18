# Note Taker Starter Code

## User Story

AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete

## Acceptance Criteria

GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column

## To-do

- Create HTML routes for notes.html (GET /notes) and index.html (GET \*)
- Create API routes: GET /api/notes should read db.json and return all saved notes as JSON; POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. Each note should have a UUID (check npm packages).
- Create DELETE functionality with a DELETE /api/notes/:id route, using query parameters with the id of the note to delete from the db.json file.
- Deploy application to Heroku.
