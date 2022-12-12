const express = require('express');
const Note = require('../models/note');
const router = express.Router();
router.get('/', async (req, res) => {
    try{
        const notes = await Note.getAllNotes();
        res.send(notes);
    } catch (err){
        res.status(401).send({message : err.message});
    }
});
router.post('/create', async (req, res) => {
  try {
    let note = await Note.createNote(req.body);
    res.send({...note});
  } catch(err) {
    res.status(401).send({message: err.message})
  }
})
router.put('/edit', async (req, res) => {
    try {
      let note = await note.editNotes(req.body);
      res.send({...note});
    } catch(err) {
      res.status(401).send({message: err.message})
    }
  })

router.delete('/delete', async (req, res) => {
    try {
      note.deleteNote(req.body);
      res.send({success})
    } catch(err) {
      res.status(401).send({message: err.message})
    }
  })
module.exports = router;