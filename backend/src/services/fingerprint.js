const crypto = require('crypto');

function generateFingerprint({ errorType, file, line, message }) {
  const raw = `${errorType}|${file}|${line}|${message}`;
  return crypto.createHash('sha1').update(raw).digest('hex');
}

module.exports = generateFingerprint;
