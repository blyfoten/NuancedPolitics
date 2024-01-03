const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

// Protected Route Example
router.get('/protected', auth, (req, res) => {
    res.json({ message: "Access to protected route successful", user: req.user });
});

module.exports = router;