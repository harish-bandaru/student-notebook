const express = require('express');
const User = require('../models/note');
const router = express.Router();
router.get('/', async (req, res) => {
    try{
        const notes = await note.getAllNotes();
        res.send(notes);
    } catch (err){
        res.status(401).send({message : err.message});
    }
});
.put('/edit', async (req, res) => {
    try {
      let note = await note.editNotes(req.body);
      res.send({...note});
    } catch(err) {
      res.status(401).send({message: err.message})
    }
  })

  .delete('/delete', async (req, res) => {
    try {
      note.deleteNote(req.body);
      res.send({success})
    } catch(err) {
      res.status(401).send({message: err.message})
    }
  })
module.exports = router;