const con = require("./db_connect");

async function createTable(){
    let sql = `CREATE TABLE IF NOT EXISTS notes ( 
        noteID INT NOT NULL AUTO_INCREMENT,
        noteContent VARCHAR(255),
        userID INT,
        CONSTRAINT notes_pk PRIMARY KEY (noteID),
        CONSTRAINT notes_fk FOREIGN KEY (userID) REFERENCES users(userID)
    )`;
    await con.query(sql);
}
createTable();

//get all notes
async function getAllNotes(){
    //console.log("notes from models function getnotes")
    const sql = `SELECT * FROM notes`
    let notes = await con.query(sql);
    //console.log(notes)
    return notes;
}

//create notes
async function createNote(note){
    const sql=`INSERT INTO notes(noteContent,userID) VALUES ("${note.noteContent}",${note.userID});`
    await con.query(sql);
    
}
//read notes
async function fetch(note){
    let cNote = await getNote(note);
    if(!cNote[0]) throw Error("Note not found");
    return cNote[0];
}

//update note
async function editNote(note){
    let sql = `UPDATE notes
      SET noteContent = "${note.noteContent}"
      Where noteID = ${note.noteID};
    `;
    await con.query(sql);
    let updatedNote = await getNote(note);
    return updatedNote[0];

}
//Delete note
async function deleteUser(user){
    let sql = `DELETE FROM notes
    WHERE noteID = ${note.noteID}`;
await con.query(sql);
}

//Useful functions
async function getNote(note){
    let sql;
    if (note.userID){
        sql=`SELECT * FROM notes
        WHERE userID = ${note.userID}`;
    } else {
        sql = `
        SELECT * FROM notes 
          WHERE noteID = "${note.noteID}"
      `;
      }
    return await con.query(sql);
}

module.exports = { createNote, getAllNotes, getNote};