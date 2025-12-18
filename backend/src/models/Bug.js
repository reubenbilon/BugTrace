const mongoose = require('mongoose');

const BugSchema = new mongoose.Schema({
  errorType: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  file: {
    type: String
  },
  line: {
    type: Number
  },
  severity: {
    type: String,
    default: 'low'
  },
  environment: {
    type: String,
    default: 'development'
  },

  // 👇 ADD THIS FIELD HERE (INSIDE SCHEMA)
  alerted: {
    type: Boolean,
    default: false
  }

}, {
  timestamps: true
});

module.exports = mongoose.model('Bug', BugSchema);
