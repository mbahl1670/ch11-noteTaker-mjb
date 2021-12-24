const express = require("express");
const fs = require("fs");
const path = require("path");
const db = require("./db/db.json");
const { createNewNote, deleteNote } = require("./lib/db");
const { v4: uuidv4 } = require('uuid');

const PORT = process.env.PORT || 3001;
const app = express();
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use(express.static("public"));

app.get("/api/notes", (req, res) => {
    res.json(db);
});

app.post("/api/notes", (req, res) => {
    const newNote = createNewNote(req.body, db);
    res.json(newNote);
});

app.delete("/api/notes/:id", (req, res) => {
    deleteNote(req.params.id, db);
    res.json(db);
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
  });

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });