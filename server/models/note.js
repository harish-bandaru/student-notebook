const notes = [{
    userId: "12345",
    noteId: "1",
    noteContent: "Hello This is my first note" 
    }, {
    userId: "12346",
    noteId: "2",
    noteContent: "Hello This is my second note" 
    }, {
    userId: "12347",
    noteId: "3",
    noteContent: "Hello This is my third note" 
    }
]
let getNotes = () => notes;

module.exports = { getNotes };