// Requires Node Modules
const util = require("util");
const fs = require("fs");

// Invokes Node Modules to Retrieve and Save Notes Data
const retrieveData = util.promisify(fs.readFile);
const saveData = util.promisify(fs.writeFile);

// Defines Variable to Generate Unique Note ID (Math.random Module)
let uniqueID = "id" + Math.random().toString(16).slice(2);

// Class defines Methods to Retrieve Stored Data (Notes), and Post and Delete Data (Notes)
class Store {
  retrieve() {
    return retrieveData("db/db.json", "utf8");
  }

  save(note) {
    return saveData("db/db.json", JSON.stringify(note));
  }

  getNotes() {
    return this.retrieve().then((notes) => {
      let parsedNotes;

      try {
        parsedNotes = [].concat(JSON.parse(notes));
      } catch (err) {
        parsedNotes = [];
      }

      return parsedNotes;
    });
  }

  postNote(note) {
    const { title, text } = note;

    if (!title || !text) {
      throw new Error("A Title and Text is Required for each Note.");
    }

    const newNote = { title, text, id: uniqueID };

    return this.getNotes()
      .then((notes) => [...notes, newNote])
      .then((updatedNotes) => this.save(updatedNotes))
      .then(() => newNote);
  }

  deleteNote(id) {
    return this.getNotes()
      .then((notes) => notes.filter((note) => note.id !== id))
      .then((filteredNotes) => this.save(filteredNotes));
  }
}

module.exports = new Store();
