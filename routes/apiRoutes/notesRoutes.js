const express = require("express");
const router = require("express").Router();
const fs = require("fs");
const db = require("../../db/db.json");
const { createNewNote, deleteNote } = require("../../lib/db");
const { v4: uuidv4 } = require('uuid');

router.get("/notes", (req, res) => {
    res.json(db);
});

router.post("/notes", (req, res) => {
    const newNote = createNewNote(req.body, db);
    res.json(newNote);
});

router.delete("/notes/:id", (req, res) => {
    deleteNote(req.params.id, db);
    res.json(db);
});

module.exports = router;