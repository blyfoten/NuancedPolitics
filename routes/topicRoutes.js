const express = require('express');
const router = express.Router();

// Mock topics data based on scope for demonstration, normally this would come from a database
const topicsData = {
  global: [
    { id: 1, title: "Climate Change", description: "Discuss on global warming and environmental policies." },
    { id: 2, title: "Cryptocurrencies", description: "Debate on the future of digital currencies worldwide." }
  ],
  national: [
    { id: 1, title: "Healthcare Reform", description: "What should be done about the national healthcare situation?" },
    { id: 2, title: "Education System", description: "Discuss the state of our education system." }
  ],
  local: [
    { id: 1, title: "Public Transport", description: "Enhancements on local transportation systems." },
    { id: 2, title: "Local Elections", description: "Discuss candidates and policies for the upcoming elections." }
  ]
};

router.get('/topics/:scope', (req, res) => {
  const { scope } = req.params;
  const topics = topicsData[scope];
  if (!topics) {
    return res.status(404).json({ message: 'Scope not found' });
  }

  res.json(topics);
});

module.exports = router;
