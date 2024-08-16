// Requires Express Modules
const express = require("express");
const router = require("express").Router();
const db = require("../db/db.js");

// GET Notes Router, Retrieves Posted (Saved) Notes
router.get("/notes", function (req, res) {
  db.getNotes()
    .then((notes) => {
      console.log("apiRoutes Line 11:", notes);
      return res.json(notes);
    })
    .catch((err) => res.status(500).json(err));
});

// POST Note Router, Saves new Note to App Database
router.post("/notes", function (req, res) {
  db.postNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));
});

// DELETE Note Router, Deletes selected Note from App Database (Note ID)
router.delete("/notes/:id", function (req, res) {
  db.deleteNote(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
