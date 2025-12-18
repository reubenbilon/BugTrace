const express = require('express');
const router = express.Router();
const Bug = require('../models/Bug');

// GET /api/analytics/top-bugs
router.get('/top-bugs', async (req, res) => {
  try {
    const bugs = await Bug.aggregate([
      {
        $group: {
          _id: '$fingerprint',
          count: { $sum: 1 },
          errorType: { $first: '$errorType' },
          message: { $first: '$message' },
          file: { $first: '$file' }
        }
      },
      { $sort: { count: -1 } },
      { $limit: 5 }
    ]);

    res.json(bugs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
