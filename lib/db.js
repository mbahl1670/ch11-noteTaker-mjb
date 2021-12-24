const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require('uuid');

function createNewNote(body, notesArray) {
    const note = body;

    note.id = uuidv4();

    notesArray.push(body);

    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"), 
        JSON.stringify(notesArray, null, 2)
    );

    return note;    
};

function deleteNote(noteID, notesArray) {
    
    // I'm not sure why this didn't work, will run it by a TA or Jaired
    // newNotesArray = notesArray.filter(note => {
    //     if (note.id === noteID) {
    //         return false;
    //     } else {
    //         return true;
    //     }
    // });

    // notesArray = newNotesArray;
    
    let deleteIndex = null;
    
    for (i = 0; i < notesArray.length; i++) {
        if (notesArray[i].id == noteID) {
            deleteIndex = i;
        }
    };

    notesArray.splice(deleteIndex, 1);

    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"), 
        JSON.stringify(notesArray, null, 2)
    );

    return notesArray;
};

module.exports = { createNewNote, deleteNote };