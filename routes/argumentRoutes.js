const express = require('express');
const router = express.Router();
const Argument = require('../models/Argument');

router.post('/vote/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const argument = await Argument.findById(id);
    if (argument) {
      argument.votes += 1;
      await argument.save();
      req.app.get('io').emit('vote', { id, votes: argument.votes });
      res.status(200).json({ message: 'Vote added', id, votes: argument.votes });
    } else {
      res.status(404).json({ message: 'Argument not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
