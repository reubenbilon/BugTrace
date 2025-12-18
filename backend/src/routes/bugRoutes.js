const express = require('express');
const router = express.Router();
const Bug = require('../models/Bug');
const sendSlackAlert = require('../services/alertService');


/**
 * @route   POST /api/bugs
 * @desc    Ingest a bug, store it, and alert if legit
 */
router.post('/', async (req, res) => {
  try {
    const {
      errorType,
      message,
      file,
      line,
      severity = 'low',
      environment = 'development'
    } = req.body;

    // 1️⃣ Save bug
    const bug = await Bug.create({
      errorType,
      message,
      file,
      line,
      severity,
      environment
    });

    // 2️⃣ Count occurrences of same bug
    const count = await Bug.countDocuments({
      errorType,
      message,
      file,
      environment
    });

    bug.count = count;
    await bug.save();
    await sendSlackAlert(bug);


    // 3️⃣ Smart Slack alert (NO SPAM)
    if (
      severity === 'high' &&
      environment === 'production' &&
      count >= 3 &&
      !bug.alerted
    ) {
      await sendSlackAlert(bug);
      bug.alerted = true;
      await bug.save();
    }

    res.status(201).json({
      success: true,
      data: bug
    });

  } catch (err) {
    console.error('Bug ingestion failed:', err);
    res.status(500).json({
      success: false,
      error: 'Server error'
    });
  }
});

module.exports = router;
